package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateProductInput {
    String name;

    Float price;

    Float oldPrice;

    int stock;

    int sold;

    String brand;

    String material;

    String origin;

    String sendFrom;

    String[] imagePaths;
}
