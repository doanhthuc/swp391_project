package com.example.javagraphqltutorial.resolver.category;

import com.example.javagraphqltutorial.entity.Category;
import com.example.javagraphqltutorial.repository.CategoryRepository;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class CategoryQueryResolver implements GraphQLQueryResolver {
    private final CategoryRepository categoryRepository;

    List<Category> categories() {
        return categoryRepository.findAll();
    }
}
