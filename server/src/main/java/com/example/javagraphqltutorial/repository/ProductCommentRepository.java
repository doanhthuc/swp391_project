package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.ProductComment;
import com.example.javagraphqltutorial.entity.ProductCommentPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductCommentRepository extends JpaRepository<ProductComment, ProductCommentPK> {
    List<ProductComment> findAllByProductId(UUID id);
}
