package com.neo.ppln.query;

import com.neo.ppln.entity.User;
import org.springframework.data.jpa.domain.Specification;

public class UserSpecifications {
    public static Specification<User> hasUserId(final String userId) {
       return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("userName"), userId);
    }

}
