package com.example.javagraphqltutorial.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.ZonedDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "product")
@Builder
public class Product {
    @Id
    @GeneratedValue
    @Column( columnDefinition = "uuid", updatable = false )
    private UUID id;

    private String name;

    private Float price;

    private Float oldPrice;

    private int stock;

    private int sold;

    private Float star;

    private String brand;

    private String material;

    private String origin;

    private String sendFrom;

    @CreatedDate
    private ZonedDateTime createdAt;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductImage> productImages = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<OrderDetail> orderDetails = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<RateProduct> rates = new ArrayList<>();

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductComment> productComments = new ArrayList<>();

    public Product(UUID id, String name, float price, int stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public Product(String name, float price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public Product(String name, Float price, Float oldPrice, int stock, String brand, String material, String origin, String sendFrom) {
        this.name = name;
        this.price = price;
        this.oldPrice = oldPrice;
        this.stock = stock;
        this.brand = brand;
        this.material = material;
        this.origin = origin;
        this.sendFrom = sendFrom;
        this.sold = 0;
    }

    public Product(String name, Float price, int stock, String brand, String material, String origin, String sendFrom) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.brand = brand;
        this.material = material;
        this.origin = origin;
        this.sendFrom = sendFrom;
        this.sold = 0;
        this.oldPrice = 0F;
    }
}
