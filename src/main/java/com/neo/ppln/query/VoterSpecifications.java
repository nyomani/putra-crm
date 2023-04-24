package com.neo.ppln.query;

import com.neo.ppln.dataType.SnailMailStatus;
import com.neo.ppln.entity.SnailMail;
import com.neo.ppln.entity.Voter;
import com.neo.ppln.entity.VoterEntryLog;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;

public class VoterSpecifications {

    public static Specification<Voter> hasMailingStatus(SnailMailStatus status) {
        if (status == null)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> {
            Join<SnailMail, Voter> voterJoint = root.join("mailingStatus");
            return criteriaBuilder.equal(voterJoint.get("status"), status);
        };

    }

    public static Specification<Voter> hasName(final String name) {

        if (name == null || name.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("nama"), "%"+name+"%");
    }

    public static Specification<Voter> hasLastName(final String lastName) {

        if (lastName == null || lastName.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("lastName"), "%"+lastName+"%");
    }
    public static Specification<Voter> hasState(final String state) {

        if (state == null || state.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.like(root.get("state"), "%"+state+"%");
    }

    public static Specification<Voter> hasPassport(final String passport) {
        if (passport == null || passport.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("passport"), passport);
    }
    public static Specification<Voter> hasTglLahir(final String tglLahir) {
        if (tglLahir == null || tglLahir.trim().length() == 0)
        {
            return null;
        }
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("tglLahir"), tglLahir);
    }

}
