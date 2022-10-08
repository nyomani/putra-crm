package com.neo.putra.data.repository;

import com.neo.putra.data.entity.CustomerPayment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerPaymentRepository extends AbstractRepository<CustomerPayment> {
    @Query("SELECT p FROM CustomerPayment p")
    List<CustomerPayment> findAllPayments();

    @Query("SELECT p FROM CustomerPayment p WHERE " +
            "lower(p.purchaseOrder.contact.name) like lower(concat('%', :searchTerm, '%')) " +
            "OR lower(p.purchaseOrder.contact.name) like lower(concat('%', :searchTerm, '%'))")
    List<CustomerPayment> searchPayments(@Param("searchTerm") String searchTerm);
}
