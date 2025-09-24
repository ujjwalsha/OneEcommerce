package com.ecommerce.Ecommerce.Repository;

import com.ecommerce.Ecommerce.Models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepo extends JpaRepository<Product, Integer> {
    
}
