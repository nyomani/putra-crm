package com.neo.putra.data.repository;

import com.neo.putra.data.KeyValue;
import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.CustomerPurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CustomerPurchaseOrderRepository extends AbstractRepository<CustomerPurchaseOrder>
{
    @Query("select c from CustomerPurchaseOrder c " +
            "where lower(c.contact.name) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.contact.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.contact.lastName) like lower(concat('%', :searchTerm, '%'))"
    )
    List<CustomerPurchaseOrder> search(@Param("searchTerm") String searchTerm);


    @Query("select c from CustomerPurchaseOrder c " +
            "where lower(c.contact.name) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.contact.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.contact.lastName) like lower(concat('%', :searchTerm, '%'))" +
            "AND c.orderState = com.neo.putra.data.OrderState.PO ")
    List<CustomerPurchaseOrder> searchPurchaseOrders(@Param("searchTerm") String searchTerm);

    @Query("SELECT c FROM CustomerPurchaseOrder c " +
            "where lower(c.contact.name) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.contact.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.contact.lastName) like lower(concat('%', :searchTerm, '%'))" +
            "AND c.orderState = com.neo.putra.data.OrderState.DO ")
    List<CustomerPurchaseOrder> searchDeliveredOrders(@Param("searchTerm") String searchTerm);

    @Query("SELECT c FROM CustomerPurchaseOrder c " +
            "WHERE c.orderState = com.neo.putra.data.OrderState.PO"
    )
    List<CustomerPurchaseOrder> findAllPurchaseOrders();

    @Query("SELECT c FROM CustomerPurchaseOrder c " +
            "WHERE c.orderState = com.neo.putra.data.OrderState.DO"
    )
    List<CustomerPurchaseOrder> findAllDeliveredOrders();

    List<CustomerPurchaseOrder> findByOrderState(OrderState state);

    List<CustomerPurchaseOrder> findByOrderDate(Date date);

}
