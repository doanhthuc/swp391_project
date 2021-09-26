package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateOrderInput {
    String shipAddress;
    CreateOrderDetailInput[] orderDetails;
}
