package com.neo.ppln.query;

import com.neo.ppln.entity.AbstractEntity;
import com.neo.ppln.repository.AbstractRepository;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public class SpecificationQueryBuilder<T extends AbstractEntity> {
    private AbstractRepository<T> repo;

    public SpecificationQueryBuilder(AbstractRepository<T> repo) {
        this.repo = repo;
    }

    public List<T> findAll(final List<Specification<T>> filters) {
        if (filters == null || filters.size() == 0) {
            return repo.findAll();
        }
        Specification<T> specification = filters.get(0);
        if (filters.size() > 1) {
            for (int i = 1; i < filters.size(); i++)
                if (filters.get(i) != null) {
                    specification = specification.and(filters.get(i));
                }
        }
        return repo.findAll(specification);
    }

    public T findOne(Specification<T> filter) {
        return repo.findOne(filter).orElse(null);
    }

    public T findOne(final List<Specification<T>> filters) {
        if (filters == null || filters.size() == 0) {
            return null;
        }
        Specification<T> specification = filters.get(0);
        if (filters.size() > 1) {
            for (int i = 1; i < filters.size(); i++)
                specification = specification.and(filters.get(i));
        }
        return repo.findOne(specification).orElse(null);
    }
}
