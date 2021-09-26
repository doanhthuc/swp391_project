package com.example.javagraphqltutorial.resolver.user;

import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.service.UserService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@Slf4j
@RequiredArgsConstructor
public class UserQueryResolver implements GraphQLQueryResolver {

    private final UserService userService;

    public User user (UUID id) {
        return new User(UUID.randomUUID(), "prime", "123");
    }

    public User getCurrentUser() {
        return userService.getCurrentUser();
    }
}
