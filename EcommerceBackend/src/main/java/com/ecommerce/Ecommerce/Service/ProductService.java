package com.ecommerce.Ecommerce.Service;

import com.ecommerce.Ecommerce.Models.Product;
import com.ecommerce.Ecommerce.Repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepo productRepo;

    public ProductService(ProductRepo productRepo) {
        this.productRepo = productRepo;
    }


    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public List<Product> getByCategoryId(Long categoryId) {
        return productRepo.findByCategoryId(categoryId);
    }


}
