package com.neo.putra.data.repository;

import com.neo.putra.data.entity.Product;
import com.neo.putra.data.entity.PurchaseOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends AbstractRepository<Product> {

    @Query("select p from Product p " +
        "where lower(p.name) like lower(concat('%', :searchTerm, '%'))")
    List<Product> search(@Param("searchTerm") String searchTerm);
}
