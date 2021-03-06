package com.example.javagraphqltutorial.resolver.product;

import com.example.javagraphqltutorial.entity.Category;
import com.example.javagraphqltutorial.entity.Product;
import com.example.javagraphqltutorial.entity.ProductComment;
import com.example.javagraphqltutorial.entity.ProductImage;
import com.example.javagraphqltutorial.repository.ProductCommentRepository;
import com.example.javagraphqltutorial.repository.ProductImageRepository;
import com.example.javagraphqltutorial.repository.RateProductRepository;
import graphql.kickstart.tools.GraphQLResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.List;

@Slf4j
@Component
@RequiredArgsConstructor
public class ProductResolver implements GraphQLResolver<Product> {

    private final ProductImageRepository productImageRepository;
    private final RateProductRepository rateProductRepository;
    private final ProductCommentRepository productCommentRepository;

    List<ProductImage> productImages(Product product) {
        return productImageRepository.findAllByProductId(product.getId());
    }

    Float discount(Product product) {
        return product.getOldPrice() == null ?
                0F :
                (product.getOldPrice() - product.getPrice()) / product.getOldPrice();
    }

    Float star(Product product) {
        Long numberOfRate = rateProductRepository.countRateProductByProductId(product.getId());
        if (numberOfRate == 0) return product.getStar();
        return rateProductRepository.sumStarByProductId(product.getId()) / numberOfRate;
    }

    List<ProductComment> comments(Product product) {
        return productCommentRepository.findAllByProductId(product.getId());
    }

    Long totalRates(Product product) {
        return rateProductRepository.countRateProductByProductId(product.getId());
    }

    Long totalComments(Product product) {
        return productCommentRepository.countProductCommentsByProductId(product.getId());
    }

    Category category(Product product) {
        return product.getCategory();
    }
}
