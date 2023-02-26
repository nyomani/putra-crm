package com.neo.ppln.query;

import com.neo.ppln.entity.Voter;
import org.springframework.data.jpa.domain.Specification;

public class VoterSpecifications {
    public static Specification<Voter> hasFirstName(final String firstName) {

        if (firstName == null || firstName.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("firstName"), "%"+firstName+"%");
    }

    public static Specification<Voter> hasLastName(final String lastName) {

        if (lastName == null || lastName.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("lastName"), "%"+lastName+"%");
    }
    public static Specification<Voter> hasCity(final String city) {

        if (city == null || city.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("city"), "%"+city+"%");
    }

    public static Specification<Voter> hasPassport(final String passport) {

        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("passport"), passport);
    }
}
