package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class UpdateProductInput {
    String id;
    String name;
    Float price;
    int stock;
    String[] imagePaths;
}
