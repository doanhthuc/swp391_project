package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateProductInput {
    String name;

    Float price;

    Float oldPrice;

    Integer stock;

    Integer sold;

    String brand;

    String material;

    String origin;

    String sendFrom;

    String[] imagePaths;

    String categoryName;

    Float star;
}
