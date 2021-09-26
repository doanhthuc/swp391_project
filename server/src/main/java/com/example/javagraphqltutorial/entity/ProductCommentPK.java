package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class ProductCommentPK implements Serializable {
    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "product_id")
    private UUID productId;
}
