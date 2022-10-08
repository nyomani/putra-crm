package com.neo.putra.data.query;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.Contact;
import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import java.time.LocalDate;

public class SupplierOrderSpecifications
{
    public static Specification<SupplierPurchaseOrder> hasDate(final LocalDate date) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("orderDate"), date);
    }


    public static Specification<SupplierPurchaseOrder> hasProduct(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<SupplierPurchaseOrder, Product> productJoin = root.join("product");
            return criteriaBuilder.equal(productJoin.get("name"), product.getName());
        };
    }

    public static Specification<SupplierPurchaseOrder> hasBrand(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<SupplierPurchaseOrder, Product> productJoin = root.join("product");
            return criteriaBuilder.equal(productJoin.get("brand"), product.getBrand());
        };
    }


    public static Specification<SupplierPurchaseOrder> hasOrderState(final OrderState state) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("orderState"), state);
    }


    public static Specification<SupplierPurchaseOrder> hasSupplierName(final Contact contact) {
        return (root, query, criteriaBuilder) ->
        {
            Join<SupplierPurchaseOrder, Product> productJoin = root.join("product");
            Join<Product, Contact> contactJoin = productJoin.join("contact");
            return criteriaBuilder.equal(contactJoin.get("name"), contact.getName());
        };
    }
}
