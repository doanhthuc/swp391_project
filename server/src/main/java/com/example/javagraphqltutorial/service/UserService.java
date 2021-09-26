package com.example.javagraphqltutorial.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.auth0.jwt.interfaces.JWTVerifier;
import com.example.javagraphqltutorial.entity.Role;
import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateUserInput;
import com.example.javagraphqltutorial.repository.RoleRepository;
import com.example.javagraphqltutorial.repository.UserRepository;
import com.example.javagraphqltutorial.security.BadTokenException;
import com.example.javagraphqltutorial.security.JWTUserDetails;
import com.example.javagraphqltutorial.security.SecurityProperties;
import com.example.javagraphqltutorial.security.UserAlreadyExistsException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;
import java.util.stream.Collectors;

import static com.example.javagraphqltutorial.utils.StreamUtils.collectionStream;
import static java.util.function.Predicate.not;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {
    private static final String ADMIN_AUTHORITY = "ADMIN";
    private static final String USER_AUTHORITY = "USER";
    private final UserRepository repository;
    private final RoleRepository roleRepository;
    private final SecurityProperties properties;
    private final Algorithm algorithm;
    private final JWTVerifier verifier;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Transactional
    public JWTUserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repository
                .findByUsername(username)
                .map(user -> getUserDetails(user, getToken(user)))
                .orElseThrow(() -> new UsernameNotFoundException("Username or password didn''t match"));
    }

    @Transactional
    public JWTUserDetails loadUserByToken(String token) {
        return getDecodedToken(token)
                .map(DecodedJWT::getSubject)
                .flatMap(repository::findByUsername)
                .map(user -> getUserDetails(user, token))
                .orElseThrow(BadTokenException::new);
    }

    @Transactional
    public User getCurrentUser() {
        return Optional
                .ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .map(Authentication::getName)
                .flatMap(repository::findByUsername)
                .orElse(null);
    }

    @Transactional
    public User createUser(CreateUserInput input) {
        if (!exists(input)) {
            List<Role> roleList = new ArrayList<>();
            for(String roleName : input.getRoleNames()) {
                roleList.add(roleRepository.findByName(roleName));
            }
            return repository.saveAndFlush(User
                    .builder()
                    .username(input.getUsername())
                    .password(passwordEncoder.encode(input.getPassword()))
                    .roles(roleList)
                    .build());
        } else {
            throw new UserAlreadyExistsException(input.getUsername());
        }
    }

//    @Transactional
//    public User updatePassword(Long personId, UpdatePasswordInput input) {
//        User user = repository.findById(personId).orElseThrow(() -> new UserNotFoundException(personId));
//        if (passwordEncoder.matches(input.getOriginalPassword(), user.getPassword())) {
//            user.setPassword(passwordEncoder.encode(input.getNewPassword()));
//        } else {
//            throw new BadCredentialsException(user.getEmail());
//        }
//        return user;
//    }

    @Transactional
    public String getToken(User user) {
        Instant now = Instant.now();
        Instant expiry = Instant.now().plus(properties.getTokenExpiration());
        return JWT
                .create()
                .withIssuer(properties.getTokenIssuer())
                .withIssuedAt(Date.from(now))
                .withExpiresAt(Date.from(expiry))
                .withSubject(user.getUsername())
                .sign(algorithm);
    }

    public boolean isAdmin() {
        return Optional
                .ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .map(Authentication::getAuthorities)
                .stream()
                .flatMap(Collection::stream)
                .map(GrantedAuthority::getAuthority)
                .anyMatch(ADMIN_AUTHORITY::equals);
    }

    public boolean isAuthenticated() {
        return Optional
                .ofNullable(SecurityContextHolder.getContext())
                .map(SecurityContext::getAuthentication)
                .filter(Authentication::isAuthenticated)
                .filter(not(this::isAnonymous))
                .isPresent();
    }

    private boolean isAnonymous(Authentication authentication) {
        return authentication instanceof AnonymousAuthenticationToken;
    }

    @Transactional
    public boolean deleteUser(UUID personId) {
        if (repository.existsById(personId)) {
            repository.deleteById(personId);
            return true;
        } else {
            return false;
        }
    }

//    @Transactional
//    public Person promotePerson(Long personId) {
//        Person person = personService.getById(personId);
//        person.getUser().withRole(ADMIN_AUTHORITY);
//        return person;
//    }
//
//    @Transactional
//    public Person unpromotePerson(Long personId) {
//        Person person = personService.getById(personId);
//        person.getUser().withoutRole(ADMIN_AUTHORITY);
//        return person;
//    }

    private boolean exists(CreateUserInput input) {
        return repository.existsByUsername(input.getUsername());
    }

    private JWTUserDetails getUserDetails(User user, String token) {
        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role ->
                authorities.add((new SimpleGrantedAuthority(role.getName()))));
        return JWTUserDetails
                .builder()
                .username(user.getUsername())
                .password(user.getPassword())
                .authorities(authorities)
                .token(token)
                .build();
    }

    private Optional<DecodedJWT> getDecodedToken(String token) {
        try {
            return Optional.of(verifier.verify(token));
        } catch(JWTVerificationException ex) {
            return Optional.empty();
        }
    }
}
