package com.example.javagraphqltutorial.resolver.product;

import com.example.javagraphqltutorial.entity.Product;
import com.example.javagraphqltutorial.entity.ProductImage;
import com.example.javagraphqltutorial.repository.ProductRepository;
import com.example.javagraphqltutorial.type.PaginatedProduct;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLQueryResolver;
import graphql.schema.DataFetchingEnvironment;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.bind.DefaultValue;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Component
@Slf4j
@AllArgsConstructor
public class ProductQueryResolver implements GraphQLQueryResolver {

    public ProductRepository productRepository;

    public Product product (UUID id) {
        Optional<Product> product = productRepository.findById(id);
        product.orElseThrow(() -> new GraphQLException("Product not found"));
        return product.get();
    }

//    public List<Product> products() {
//        return productRepository.findAll();
//    }

    public PaginatedProduct products(Integer page, Integer limit, String order, String field) {
        PaginatedProduct result = new PaginatedProduct();
        Sort sortable;
        if (order.equals("DESC")) {
            sortable = Sort.by(field).descending();
        } else {
            sortable = Sort.by(field).ascending();
        }
        if (page != null && limit != null) {
            Pageable pageable = PageRequest.of(page - 1, limit, sortable);
            result.setPage(page);
            result.setTotalPages((int) Math.ceil(productRepository.count() * 1.0 / limit));
            result.setProducts(productRepository.findAll(pageable).getContent());
        } else {
            result.setProducts(productRepository.findAll());
        }
        return result;
    }
}
