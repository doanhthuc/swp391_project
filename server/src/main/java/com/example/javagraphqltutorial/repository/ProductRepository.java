package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProductRepository extends JpaRepository<Product, UUID> {
    Page<Product> findAllByCategory_Name(String categoryName, Pageable pageable);

    int countByCategoryName(String category_name);
}
