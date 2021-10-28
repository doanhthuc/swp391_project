package com.example.javagraphqltutorial.resolver.rate;

import com.example.javagraphqltutorial.entity.Product;
import com.example.javagraphqltutorial.entity.RateProduct;
import com.example.javagraphqltutorial.entity.RateProductPK;
import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateRateProductInput;
import com.example.javagraphqltutorial.repository.ProductRepository;
import com.example.javagraphqltutorial.repository.RateProductRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class RateProductMutationResolver implements GraphQLMutationResolver {

    private final RateProductRepository rateProductRepository;
    private final ProductRepository productRepository;
    private final UserService userService;

    public RateProduct rate(CreateRateProductInput input) {
        Optional<Product> product = productRepository.findById(UUID.fromString(input.getProductId()));
//        product.orElseThrow(() -> new GraphQLException("Product not found"));
        if (product.isEmpty()) {
            throw new GraphQLException("Product not found");
        }
        User user = userService.getCurrentUser();
        RateProduct rateProduct = rateProductRepository.save(
                new RateProduct(
                        new RateProductPK(user.getId(), product.get().getId()),
                        input.getStar()
                ));
        rateProduct.setProduct(product.get());
        rateProduct.setUser(user);
        return rateProduct;
    }
}
