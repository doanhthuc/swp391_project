package com.example.javagraphqltutorial.resolver.rate;

import com.example.javagraphqltutorial.entity.RateProduct;
import com.example.javagraphqltutorial.entity.RateProductPK;
import com.example.javagraphqltutorial.repository.RateProductRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@Slf4j
@RequiredArgsConstructor
public class RateProductQueryResolver implements GraphQLQueryResolver {
    private final RateProductRepository rateProductRepository;
    private final UserService userService;

    public RateProduct getRate(String productId) {
        UUID userId = userService.getCurrentUser().getId();
        RateProductPK id = new RateProductPK(userId, UUID.fromString(productId));
        if (rateProductRepository.findById(id).isEmpty()) {
            return null;
        } else {
            return rateProductRepository.findById(id).get();
        }
    }
}
