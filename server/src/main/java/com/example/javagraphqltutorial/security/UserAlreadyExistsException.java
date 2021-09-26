package com.example.javagraphqltutorial.security;

import lombok.RequiredArgsConstructor;

import java.text.MessageFormat;

@RequiredArgsConstructor
public class UserAlreadyExistsException extends RuntimeException {
    private static final long serialVersionUID = 8369435603356630425L;
    private final String username;

    @Override
    public String getMessage() {
        return MessageFormat.format("A user already exists with username ''{0}''", username);
    }
}
