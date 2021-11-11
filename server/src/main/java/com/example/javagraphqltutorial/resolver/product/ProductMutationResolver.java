package com.example.javagraphqltutorial.resolver.product;

import com.example.javagraphqltutorial.entity.Category;
import com.example.javagraphqltutorial.entity.Product;
import com.example.javagraphqltutorial.entity.ProductComment;
import com.example.javagraphqltutorial.entity.ProductImage;
import com.example.javagraphqltutorial.entity.input.CreateProductCommentInput;
import com.example.javagraphqltutorial.entity.input.CreateProductInput;
import com.example.javagraphqltutorial.entity.input.UpdateProductInput;
import com.example.javagraphqltutorial.repository.CategoryRepository;
import com.example.javagraphqltutorial.repository.ProductImageRepository;
import com.example.javagraphqltutorial.repository.ProductRepository;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;

import java.time.Clock;
import java.time.ZonedDateTime;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Component
@RequiredArgsConstructor
public class ProductMutationResolver implements GraphQLMutationResolver {
    private final Clock clock;
    private final ProductRepository productRepository;
    private final ProductImageRepository productImageRepository;
    private final CategoryRepository categoryRepository;

//    public ProductMutationResolver(ProductRepository productRepository, ProductImageRepository productImageRepository) {
//        this.productRepository = productRepository;
//        this.productImageRepository = productImageRepository;
//    }

    @PreAuthorize("hasAuthority('ADMIN')")
    public Product createProduct (CreateProductInput input) {
        Category category =
                categoryRepository.findByName(input.getCategoryName()).orElseThrow(() -> new GraphQLException("Category not found"));

        Product product = Product.builder()
                .name(input.getName()).price(input.getPrice()).oldPrice(input.getOldPrice())
                .stock(input.getStock()).brand(input.getBrand()).material(input.getMaterial())
                .origin(input.getOrigin()).sendFrom(input.getSendFrom()).createdAt(ZonedDateTime.now(clock))
                .category(category).sold(0).star(input.getStar()).build();

        product = productRepository.save(product);
        if (input.getImagePaths() != null) {
            for (String imagePath : input.getImagePaths()) {
                productImageRepository.save(new ProductImage(imagePath, product));
            }
        }
        return product;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    public String deleteProduct(String id) {
        UUID uuid = UUID.fromString(id);
        Optional<Product> product = productRepository.findById(uuid);
        product.ifPresentOrElse(productRepository::delete, () -> {
            throw new GraphQLException("Product not found");
        });
        return id;
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    public Product updateProduct(UpdateProductInput input) {
        UUID uuid = UUID.fromString(input.getId());
        Optional<Product> product = productRepository.findById(uuid);
        product.ifPresentOrElse(p -> {
            p.setName(input.getName());
            p.setPrice(input.getPrice());
            p.setStock(input.getStock());
            p.setOldPrice(p.getPrice());
            productRepository.save(p);
        }, () -> {
            throw new GraphQLException("Product not found");
        });
        return product.get();
    }
}
