package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    Page<Product> findAllByCategory_Name(String categoryName, Pageable pageable);

    int countByCategoryName(String category_name);

    @Query("SELECT p FROM Product p WHERE CONCAT(p.name, ' ', p.brand, ' ', p.category.name, ' ', p.price) LIKE %?1%")
    List<Product> search(String keyword);
}
