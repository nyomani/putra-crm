package com.neo.putra.data.repository;

import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Transaction;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends AbstractRepository<Account> {
}
