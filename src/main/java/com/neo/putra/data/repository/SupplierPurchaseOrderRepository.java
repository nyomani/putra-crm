package com.neo.putra.data.repository;

import com.neo.putra.data.OrderState;
import com.neo.putra.data.entity.PurchaseOrder;
import com.neo.putra.data.entity.StockAdapter;
import com.neo.putra.data.entity.SupplierPurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface SupplierPurchaseOrderRepository extends AbstractRepository<SupplierPurchaseOrder>
{
    @Query("SELECT c FROM SupplierPurchaseOrder c " +
            "WHERE lower(c.product.supplier.name) like lower(concat('%', :searchTerm, '%')) " +
            "OR lower(c.product.supplier.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "OR lower(c.product.supplier.lastName) like lower(concat('%', :searchTerm, '%'))"
    )
    List<SupplierPurchaseOrder> search(@Param("searchTerm") String searchTerm);

    @Query("SELECT new com.neo.putra.data.entity.StockAdapter(" +
            "c, " +
            "c.purchaseQuantity * c.purchasePrice, " +
            "SUM(c1.deliveredQuantity), " +
            "SUM(c1.deliveredQuantity * c1.deliveredPrice)," +
            "SUM(c1.purchaseQuantity), " +
            "SUM(c1.purchaseQuantity * c1.purchasePrice)) " +
            "FROM SupplierPurchaseOrder c, CustomerPurchaseOrder c1 " +
            "WHERE c1.stock.id = c.id " +
            "AND c.orderState = com.neo.putra.data.OrderState.DO " +
            "GROUP BY c.id")
    List<StockAdapter> findAllStocks();

    @Query("SELECT c FROM SupplierPurchaseOrder c " +
            "WHERE c.orderState = com.neo.putra.data.OrderState.DO " +
            "AND (lower(c.product.name) like lower(concat('%', :searchTerm, '%')) " +
            "OR lower(c.product.supplier.name) like lower(concat('%', :searchTerm, '%')))")
    List<SupplierPurchaseOrder> searchStocks(@Param("searchTerm") String searchTerm);

    @Query("SELECT c FROM SupplierPurchaseOrder c " +
            "WHERE c.orderState = com.neo.putra.data.OrderState.PO"
    )
    List<SupplierPurchaseOrder> findAllPurchaseOrders();


    @Query("SELECT c FROM SupplierPurchaseOrder c " +
            "WHERE c.orderState = com.neo.putra.data.OrderState.PO " +
            "AND (lower(c.product.name) like lower(concat('%', :searchTerm, '%')) " +
            "OR lower(c.product.supplier.name) like lower(concat('%', :searchTerm, '%')))")
    List<SupplierPurchaseOrder> searchPurchaseOrders(@Param("searchTerm") String searchTerm);

    List<SupplierPurchaseOrder> findByOrderState(OrderState state);

    List<SupplierPurchaseOrder> findByOrderDate(Date date);
}
