package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

import java.util.UUID;

@Data
public class CreateProductCommentInput {
    UUID productId;
    String comment;
}
