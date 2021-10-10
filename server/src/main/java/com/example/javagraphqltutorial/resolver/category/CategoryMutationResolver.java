package com.example.javagraphqltutorial.resolver.category;

import com.example.javagraphqltutorial.entity.Category;
import com.example.javagraphqltutorial.repository.CategoryRepository;
import graphql.GraphQLException;
import graphql.kickstart.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class CategoryMutationResolver implements GraphQLMutationResolver {
    private final CategoryRepository categoryRepository;

    Category createCategory(String name) {
        if(categoryRepository.findByName(name).isPresent()) {
            throw new GraphQLException("Category has existed");
        }
        return categoryRepository.save(Category.builder().name(name).build());
    }
}
