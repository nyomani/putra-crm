package com.neo.putra.data.query;

import com.neo.putra.data.ContactType;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Contact;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;

public class AccountSpecifications {
    public static Specification<Account> hasContactType(final ContactType type) {

        return (root, query, criteriaBuilder) ->
        {
            Join<Account, Contact> contactJoin = root.join("contact");
            return criteriaBuilder.equal(contactJoin.get("contactType"), type);
        };
    }

    public static Specification<Account> hasContact(final Contact contact) {

        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("contact"), contact);

    }
}
