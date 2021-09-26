package com.example.javagraphqltutorial.type;

import com.example.javagraphqltutorial.entity.Product;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class PaginatedProduct {
    private int page;
    private int totalPages;
    private List<Product> products = new ArrayList<>();
}
