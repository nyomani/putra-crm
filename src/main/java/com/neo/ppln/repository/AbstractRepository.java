package com.neo.ppln.repository;

import com.neo.ppln.entity.AbstractEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface AbstractRepository<T extends AbstractEntity> extends JpaRepository<T, Integer>,
        JpaSpecificationExecutor<T> {
}
