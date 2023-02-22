package com.neo.putra.data.service;

import com.neo.putra.data.AbstractEntity;
import com.neo.putra.data.query.SpecificationQueryBuilder;
import com.neo.putra.data.repository.AbstractRepository;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class DataService<T extends AbstractEntity> implements DataAccess<T> {
    private AbstractRepository<T> repository;
    private SpecificationQueryBuilder<T> queryBuilder;

    public DataService(final AbstractRepository<T> repository)
    {
        this.repository = repository;
        this.queryBuilder = new SpecificationQueryBuilder<>(repository);
    }

    @Override
    public List<T> findAll(final List<Specification<T>> filters)
    {
        return queryBuilder.findAll(filters);
    }

    @Override
    public List<T> findAll() {
        return repository.findAll();
    }

    @Override
    public T find(final Specification<T> filter)
    {
        return queryBuilder.findOne(filter);
    }

    @Override
    public T find(final List<Specification<T>> filters)
    {
        return queryBuilder.findOne(filters);
    }

    @Override
    public List<T> saveAll(final List<T> entities)
    {
        return repository.saveAll(entities);
    }

    @Override
    public T save(final T entity)
    {
        return repository.save(entity);
    }

    @Override
    public void delete(final T entity)
    {
        repository.delete(entity);
    }

    @Override
    public long count() {
        return repository.count();
    }

}
