package com.example.javagraphqltutorial.resolver.order;

import com.example.javagraphqltutorial.entity.Order;
import com.example.javagraphqltutorial.entity.OrderDetail;
import com.example.javagraphqltutorial.entity.OrderDetailPK;
import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateOrderDetailInput;
import com.example.javagraphqltutorial.entity.input.CreateOrderInput;
import com.example.javagraphqltutorial.repository.OrderDetailRepository;
import com.example.javagraphqltutorial.repository.OrderRepository;
import com.example.javagraphqltutorial.repository.ProductRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.time.Clock;
import java.time.ZonedDateTime;
import java.util.UUID;

@Component
@Slf4j
@RequiredArgsConstructor
public class OrderMutationResolver implements GraphQLMutationResolver {

    private final Clock clock;
    private final UserService userService;
    private final OrderRepository orderRepository;
    private final OrderDetailRepository orderDetailRepository;
    private final ProductRepository productRepository;

    public Order createOrder(CreateOrderInput input) {
        User user = userService.getCurrentUser();
        Order order = new Order(ZonedDateTime.now(clock), input.getShipAddress(), user);
        order = orderRepository.save(order);
        for(CreateOrderDetailInput orderDetailInput: input.getOrderDetails()) {
            productRepository.findById(UUID.fromString(orderDetailInput.getProductId()))
                    .ifPresentOrElse(product -> {
                        if (orderDetailInput.getQuantity() > product.getStock()) {
                            throw new GraphQLException("Not enough stock");
                        }
                        product.setSold(orderDetailInput.getQuantity() + product.getSold());
                        productRepository.save(product);
                    }, () -> {
                        throw new GraphQLException("Product not found");
                    });
            OrderDetailPK id = new OrderDetailPK(
                    UUID.fromString(orderDetailInput.getProductId()), order.getId());
            orderDetailRepository.save(new OrderDetail(id, orderDetailInput.getQuantity(), orderDetailInput.getPrice()));
        }
        return order;
    }
}
