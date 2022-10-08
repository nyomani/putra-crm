package com.neo.putra.data.query;

import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.entity.CustomerPurchaseOrder;
import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import java.time.LocalDate;

public class CustomerOrderSpecifications {
    public static Specification<CustomerPurchaseOrder> hasDate(final LocalDate date) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("orderDate"), date);
    }


    public static Specification<CustomerPurchaseOrder> hasProduct(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPurchaseOrder, SupplierPurchaseOrder> stockJoin = root.join("stock");
            Join<SupplierPurchaseOrder, Product> productJoin = stockJoin.join("product");
            return criteriaBuilder.equal(productJoin.get("name"), product.getName());
        };
    }

    public static Specification<CustomerPurchaseOrder> hasBrand(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPurchaseOrder, SupplierPurchaseOrder> stockJoin = root.join("stock");
            Join<SupplierPurchaseOrder, Product> productJoin = stockJoin.join("product");
            return criteriaBuilder.equal(productJoin.get("brand"), product.getBrand());
        };
    }

    public static Specification<CustomerPurchaseOrder> hasCustomerName(final Contact contact) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPurchaseOrder, Contact> contactJoin = root.join("contact");
            return criteriaBuilder.equal(contactJoin.get("name"), contact.getName());
        };
    }

    public static Specification<CustomerPurchaseOrder> hasSalesName(final Contact contact) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPurchaseOrder, Contact> salseJoin = root.join("sales");
            return criteriaBuilder.equal(salseJoin.get("name"), contact.getName());
        };
    }
}
