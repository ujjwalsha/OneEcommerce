package com.ecommerce.Ecommerce.Service;

import com.ecommerce.Ecommerce.Models.Category;
import com.ecommerce.Ecommerce.Repository.CategoryRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    private final CategoryRepo categoryRepo;

    public CategoryService(CategoryRepo categoryRepo) {
        this.categoryRepo = categoryRepo;
    }

    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }
}
