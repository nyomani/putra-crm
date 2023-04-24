package com.neo.ppln.query;

import com.neo.ppln.entity.PageCategory;
import org.springframework.data.jpa.domain.Specification;

public class PageCategorySpecifications {
    public static Specification<PageCategory> hasCategory(final String category) {

        if (category == null || category.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("category"), category);
    }

}
