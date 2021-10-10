package com.example.javagraphqltutorial.resolver.order;

import com.example.javagraphqltutorial.entity.Order;
import com.example.javagraphqltutorial.repository.OrderDetailRepository;
import com.example.javagraphqltutorial.repository.OrderRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
@RequiredArgsConstructor
public class OrderQueryResolver implements GraphQLQueryResolver {
    private final OrderRepository orderRepository;
    private final UserService userService;

    List<Order> orderHistory() {
        return orderRepository.findAllByUserId(userService.getCurrentUser().getId());
    }
}
