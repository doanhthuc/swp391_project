package com.example.javagraphqltutorial.resolver.comment;

import com.example.javagraphqltutorial.entity.ProductComment;
import com.example.javagraphqltutorial.entity.ProductCommentPK;
import com.example.javagraphqltutorial.entity.User;
import com.example.javagraphqltutorial.entity.input.CreateProductCommentInput;
import com.example.javagraphqltutorial.repository.ProductCommentRepository;
import com.example.javagraphqltutorial.repository.ProductRepository;
import com.example.javagraphqltutorial.service.UserService;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class ProductCommentMutationResolver implements GraphQLMutationResolver {

    private final ProductRepository productRepository;
    private final ProductCommentRepository productCommentRepository;
    private final UserService userService;

    public ProductComment comment (CreateProductCommentInput input) {
        User user = userService.getCurrentUser();
        ProductCommentPK id = new ProductCommentPK(user.getId(), input.getProductId());
        ProductComment productComment = productCommentRepository.save(new ProductComment(id, input.getComment()));
        productComment.setUser(user);
        return productComment;
    }
}
