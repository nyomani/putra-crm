package com.neo.putra.data.query;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Contact;
import org.springframework.data.jpa.domain.Specification;

public class ContactSpecifications {

    public static Specification<Contact> hasType(ContactType tye)
    {
        return ((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("contactType"), tye));
    }
}
