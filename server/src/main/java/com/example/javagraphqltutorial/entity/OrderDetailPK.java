package com.example.javagraphqltutorial.entity;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;
import java.util.UUID;

@Embeddable
public class OrderDetailPK implements Serializable {
    @Column(name = "product_id")
    private UUID productId;

    @Column(name = "order_id")
    private UUID orderId;

    public OrderDetailPK() {
    }

    public OrderDetailPK(UUID productId, UUID orderId) {
        this.productId = productId;
        this.orderId = orderId;
    }
}
