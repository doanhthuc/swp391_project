package com.example.javagraphqltutorial.resolver.user;

import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateUserInput;
import com.example.javagraphqltutorial.security.BadCredentialsException;
import com.example.javagraphqltutorial.service.UserService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
public class UserMutationResolver implements GraphQLMutationResolver {

    private final UserService userService;
    private final AuthenticationProvider authenticationProvider;

    public UserMutationResolver(UserService userService, AuthenticationProvider authenticationProvider) {
        this.userService = userService;
        this.authenticationProvider = authenticationProvider;
    }

    public User createUser(CreateUserInput input) {
        return userService.createUser(input);
    }

    public User login(String username, String password) {
        UsernamePasswordAuthenticationToken credentials = new UsernamePasswordAuthenticationToken(username, password);
        try {
            SecurityContextHolder.getContext().setAuthentication(authenticationProvider.authenticate(credentials));
            return userService.getCurrentUser();
        } catch (AuthenticationException ex) {
            throw new BadCredentialsException(username);
        }
    }
}
