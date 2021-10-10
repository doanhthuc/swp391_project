package com.example.javagraphqltutorial.resolver.order;

import com.example.javagraphqltutorial.entity.Order;
import com.example.javagraphqltutorial.entity.OrderDetail;
import com.example.javagraphqltutorial.repository.OrderDetailRepository;
import graphql.kickstart.tools.GraphQLResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class OrderResolver implements GraphQLResolver<Order> {
    private final OrderDetailRepository orderDetailRepository;

    public List<OrderDetail> orderDetails(Order order) {
        return orderDetailRepository.findAllByOrder(order);
    }
}
