package com.example.javagraphqltutorial.entity.input;

import lombok.Data;

@Data
public class CreateOrderInput {
    String fullName;

    String email;

    String shipAddress;

    String city;

    String nameOnCard;

    String creditCardNumber;

    String expiredYear;

    CreateOrderDetailInput[] orderDetails;
}
