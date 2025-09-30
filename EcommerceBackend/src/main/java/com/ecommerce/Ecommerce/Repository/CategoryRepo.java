package com.ecommerce.Ecommerce.Repository;

import com.ecommerce.Ecommerce.Models.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category, Long> {
}
