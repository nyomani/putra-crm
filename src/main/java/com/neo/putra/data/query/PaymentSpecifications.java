package com.neo.putra.data.query;

import com.neo.putra.data.entity.*;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import java.time.LocalDate;

public class PaymentSpecifications {
    public static Specification<CustomerPayment> hasDate(final LocalDate date) {
        return (root, query, criteriaBuilder) ->
                criteriaBuilder.equal(root.get("paymentDate"), date);
    }


    public static Specification<CustomerPayment> hasProduct(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPayment, CustomerPurchaseOrder> orderJoin = root.join("purchaseOrder");
            Join<CustomerPurchaseOrder, SupplierPurchaseOrder> stockJoin = orderJoin.join("stock");
            Join<SupplierPurchaseOrder, Product> productJoin = stockJoin.join("product");
            return criteriaBuilder.equal(productJoin.get("name"), product.getName());
        };
    }

    public static Specification<CustomerPayment> hasBrand(final Product product) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPayment, CustomerPurchaseOrder> orderJoin = root.join("purchaseOrder");
            Join<CustomerPurchaseOrder, SupplierPurchaseOrder> stockJoin = orderJoin.join("stock");
            Join<SupplierPurchaseOrder, Product> productJoin = stockJoin.join("product");
            return criteriaBuilder.equal(productJoin.get("brand"), product.getBrand());
        };
    }

    public static Specification<CustomerPayment> hasCustomerName(final Contact contact) {
        return (root, query, criteriaBuilder) ->
        {
            Join<CustomerPayment, CustomerPurchaseOrder> orderJoin = root.join("purchaseOrder");
            Join<CustomerPurchaseOrder, Contact> contactJoin = orderJoin.join("contact");
            return criteriaBuilder.equal(contactJoin.get("name"), contact.getName());
        };
    }
}
