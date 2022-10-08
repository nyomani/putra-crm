package com.neo.putra.data.query;

import com.neo.putra.data.TransactionType;
import com.neo.putra.data.entity.Account;
import com.neo.putra.data.entity.Transaction;
import com.neo.putra.data.entity.TransactionLog;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;
import java.time.LocalDate;

public class TransactionSpecification {
    public static Specification<Transaction> hasTransactionDate(final LocalDate date) {
        return (root, query, criteriaBuilder) ->
        {
            Join<Transaction, TransactionLog> transactionLogJoin = root.join("transactionLog");
            return criteriaBuilder.equal(transactionLogJoin.get("paymentDate"), date);
        };
    }

    public static Specification<Transaction> hasAccount(final Account account) {
        return (root, query, criteriaBuilder) ->
        {
            Join<Transaction, TransactionLog> transactionLogJoin = root.join("transactionLog");
            return criteriaBuilder.or(criteriaBuilder.equal(transactionLogJoin.get("debit"), account),
                    criteriaBuilder.equal(transactionLogJoin.get("credit"), account));
        };
    }

    public static Specification<Transaction> havingTransactionLog(final TransactionType type, final TransactionLog log)
    {
        return ((root, query, criteriaBuilder) ->
                criteriaBuilder.and(criteriaBuilder.equal(root.get("transactionLog"), log),
                        criteriaBuilder.equal(root.get("type"), type)));
    }
}
