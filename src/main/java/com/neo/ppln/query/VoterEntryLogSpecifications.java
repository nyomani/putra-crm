package com.neo.ppln.query;

import com.neo.ppln.entity.Voter;
import com.neo.ppln.entity.VoterEntryLog;
import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.Join;

public class VoterEntryLogSpecifications {
    public static Specification<VoterEntryLog> hasFirstName(final String firstName) {

        return (root, query, criteriaBuilder) ->
        {
            Join<VoterEntryLog, Voter> voterJoint = root.join("voter");
            return criteriaBuilder.equal(voterJoint.get("firstName"), firstName);
        };
    }

    public static Specification<Voter> hasLastName(final String lastName) {

        return (root, query, criteriaBuilder) ->
        {
            Join<VoterEntryLog, Voter> voterJoint = root.join("voter");
            return criteriaBuilder.equal(voterJoint.get("lastName"), lastName);
        };
    }

    public static Specification<Voter> hasUser(final String user) {

        return (root, query, criteriaBuilder) ->
        {
            return criteriaBuilder.equal(root.get("userId"), user);
        };
    }

    public static Specification<Voter> hasPassport(final String passport) {

        return (root, query, criteriaBuilder) ->
        {
            Join<VoterEntryLog, Voter> voterJoint = root.join("voter");
            return criteriaBuilder.equal(voterJoint.get("passport"), passport);
        };
    }
}
