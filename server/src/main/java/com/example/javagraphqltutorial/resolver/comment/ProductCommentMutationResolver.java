package com.example.javagraphqltutorial.resolver.comment;

import com.example.javagraphqltutorial.entity.Product;
import com.example.javagraphqltutorial.entity.ProductComment;
import com.example.javagraphqltutorial.entity.ProductCommentPK;
import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateProductCommentInput;
import com.example.javagraphqltutorial.repository.ProductCommentRepository;
import com.example.javagraphqltutorial.repository.ProductRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@RequiredArgsConstructor
@Component
public class ProductCommentMutationResolver implements GraphQLMutationResolver {

    private final ProductRepository productRepository;
    private final ProductCommentRepository productCommentRepository;
    private final UserService userService;

    public ProductComment comment (CreateProductCommentInput input) {
        User user = userService.getCurrentUser();
        Product product = productRepository.findById(input.getProductId())
                .orElseThrow(() -> new GraphQLException("Product not found"));

        ProductComment productComment = new ProductComment(input.getComment());
        productComment.setUser(user);
        productComment.setProduct(product);
        return productCommentRepository.save(productComment);
    }
}
