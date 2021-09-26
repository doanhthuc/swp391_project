package com.example.javagraphqltutorial.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "product_comment")
@NoArgsConstructor
public class ProductComment {
    @EmbeddedId
    private ProductCommentPK id;

    private String comment;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable=false, updatable=false)
    private User user;

    @ManyToOne
    @JoinColumn(name="product_id", insertable=false, updatable=false)
    private Product product;

    public ProductComment(ProductCommentPK id, String comment) {
        this.id = id;
        this.comment = comment;
    }
}
