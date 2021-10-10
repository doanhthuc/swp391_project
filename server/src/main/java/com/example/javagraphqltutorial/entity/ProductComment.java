package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
@Table(name = "product_comment")
@NoArgsConstructor
public class ProductComment {
    @Id
    @GeneratedValue
    @Column( columnDefinition = "uuid", updatable = false )
    private UUID id;

    @Column(columnDefinition="TEXT")
    private String comment;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    public ProductComment(String comment) {
        this.comment = comment;
    }
}
