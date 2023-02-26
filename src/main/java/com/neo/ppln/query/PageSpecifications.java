package com.neo.ppln.query;

import com.neo.ppln.entity.Page;
import org.springframework.data.jpa.domain.Specification;

public class PageSpecifications {
    public static Specification<Page> hasTitle(final String title) {

        if (title == null || title.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("title"), title);
    }

}
