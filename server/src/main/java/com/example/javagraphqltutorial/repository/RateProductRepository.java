package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.RateProduct;
import com.example.javagraphqltutorial.entity.RateProductPK;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface RateProductRepository extends JpaRepository<RateProduct, RateProductPK> {
    Long countRateProductByProductId(UUID product_id);

    @Query("SELECT SUM(r.start) FROM RateProduct r WHERE r.id.productId = ?1")
    Float sumStartByProductId(UUID productId);
}
