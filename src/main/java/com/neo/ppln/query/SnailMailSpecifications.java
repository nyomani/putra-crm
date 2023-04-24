package com.neo.ppln.query;

import com.neo.ppln.dataType.SnailMailStatus;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.entity.VoterEntryLog;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;

public class SnailMailSpecifications {

    public static Specification<Voter> hasName(final String name) {

        if (name == null || name.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> {
            Join<VoterEntryLog, Voter> voterJoint = root.join("voter");
            return criteriaBuilder.like(voterJoint.get("nama"), "%"+name+"%");
        };
    }

    public static Specification<Voter> hasStreet(final String street) {

        if (street == null || street.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> {
            Join<VoterEntryLog, Voter> voterJoint = root.join("voter");
            return criteriaBuilder.like(voterJoint.get("street"), "%"+street+"%");
        };
    }

    public static Specification<Voter> hasStatus(final SnailMailStatus status) {

        if (status == null )
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> {
            return criteriaBuilder.equal(root.get("status"), status);
        };
    }

}
