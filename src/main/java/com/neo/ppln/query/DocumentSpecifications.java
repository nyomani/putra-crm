package com.neo.ppln.query;

import com.neo.ppln.entity.Document;
import com.neo.ppln.entity.Page;
import org.springframework.data.jpa.domain.Specification;

public class DocumentSpecifications {
    public static Specification<Document> notNull() {

        return (root, query, criteriaBuilder) -> criteriaBuilder.isNotNull(root.get("url"));
    }

}
