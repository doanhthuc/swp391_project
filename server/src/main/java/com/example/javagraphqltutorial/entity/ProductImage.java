package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "product_image")
public class ProductImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    public ProductImage(Long id, String imagePath) {
        this.id = id;
        this.imagePath = imagePath;
    }

    public ProductImage(String imagePath, Product product) {
        this.imagePath = imagePath;
        this.product = product;
    }
}
