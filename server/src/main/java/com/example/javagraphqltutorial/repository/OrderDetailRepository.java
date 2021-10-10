package com.example.javagraphqltutorial.repository;

import com.example.javagraphqltutorial.entity.Order;
import com.example.javagraphqltutorial.entity.OrderDetail;
import com.example.javagraphqltutorial.entity.OrderDetailPK;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderDetailRepository extends JpaRepository<OrderDetail, OrderDetailPK> {
    List<OrderDetail> findAllByOrder(Order order);
}
