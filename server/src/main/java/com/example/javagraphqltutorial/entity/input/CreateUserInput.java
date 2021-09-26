package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateUserInput {
    String username;

    String password;

    String[] roleNames;
}
