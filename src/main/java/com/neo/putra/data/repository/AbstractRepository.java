package com.neo.putra.data.repository;

import com.neo.putra.data.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AbstractRepository<T extends AbstractEntity> extends JpaRepository<T, Integer>,
        JpaSpecificationExecutor<T> {
}
