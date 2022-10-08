package com.neo.putra.data.repository;

import com.neo.putra.data.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends AbstractRepository<Contact> {

    @Query("select c from Contact c " +
        "where lower(c.name) like lower(concat('%', :searchTerm, '%')) " +
        "or lower(c.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.lastName) like lower(concat('%', :searchTerm, '%'))"
    )
    List<Contact> search(@Param("searchTerm") String searchTerm);

    @Query("select c from Contact c where c.contactType = com.neo.putra.data.ContactType.CUSTOMER")
    List<Contact> findAllCustomers();

    @Query("select c from Contact c " +
            "where c.contactType = com.neo.putra.data.ContactType.CUSTOMER and (lower(c.name) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.lastName) like lower(concat('%', :searchTerm, '%')))"
    )
    List<Contact> searchCustomers(@Param("searchTerm") String searchTerm);

    @Query("select c from Contact c where c.contactType = com.neo.putra.data.ContactType.SUPPLIER")
    List<Contact> findAllSuppliers();

    @Query("select c from Contact c " +
            "where c.contactType = com.neo.putra.data.ContactType.SUPPLIER and (lower(c.name) like lower(concat('%', :searchTerm, '%')) " +
            "or lower(c.firstName) like lower(concat('%', :searchTerm, '%'))" +
            "or lower(c.lastName) like lower(concat('%', :searchTerm, '%')))"
    )
    List<Contact> searchSuppliers(@Param("searchTerm") String searchTerm);
}
