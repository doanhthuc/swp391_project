package com.example.javagraphqltutorial.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class RateProductPK implements Serializable {
    @Column(name = "user_id")
    private UUID userId;

    @Column(name = "product_id")
    private UUID productId;

    public RateProductPK() {
    }

    public RateProductPK(UUID userId, UUID productId) {
        this.userId = userId;
        this.productId = productId;
    }
}
