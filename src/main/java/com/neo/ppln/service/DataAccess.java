package com.neo.ppln.service;

import com.neo.ppln.entity.AbstractEntity;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public interface DataAccess<T extends AbstractEntity> {
    List<T> findAll(List<Specification<T>> filters);
    List<T> findAll();
    T find(Specification<T> filter);

    T find(List<Specification<T>> filters);

    List<T> saveAll(List<T> entities);

    T save(T entity);

    void delete(T entity);

    long count();
}
