package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateOrderDetailInput {
    String productId;
    Integer quantity;
    Float price;
}
