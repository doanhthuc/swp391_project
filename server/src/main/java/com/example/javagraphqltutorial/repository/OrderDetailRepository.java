package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.OrderDetail;
import com.example.javagraphqltutorial.entity.OrderDetailPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailPK> {
}
