package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rate_product")
public class RateProduct {
    @EmbeddedId
    private RateProductPK id;

    private Float star;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable=false, updatable=false)
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id", insertable=false, updatable=false)
    private Product product;

    public RateProduct(RateProductPK id, Float star) {
        this.id = id;
        this.star = star;
    }
}
