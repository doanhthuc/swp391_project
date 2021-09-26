package com.example.javagraphqltutorial.domain.bank;

import java.util.List;
import java.util.UUID;
import lombok.Builder;
import lombok.Value;

@Value
@Builder
public class Client {
    UUID id;
    String firstName;
    List<String> middleNames;
    String lastName;
}
