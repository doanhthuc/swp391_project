package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@Table(name = "order_detail")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrderDetail implements Serializable {
    @EmbeddedId
    private OrderDetailPK id;

    private int Quantity;

    private float Price;

    @ManyToOne
    @JoinColumn(name="product_id", insertable=false, updatable=false)
    private Product product;

    @ManyToOne
    @JoinColumn(name = "order_id", insertable=false, updatable=false)
    private Order order;

    public OrderDetail(OrderDetailPK id, int quantity, float price) {
        this.id = id;
        Quantity = quantity;
        Price = price;
    }
}
