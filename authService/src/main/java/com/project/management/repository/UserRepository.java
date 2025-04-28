package com.project.management.repository;

import com.project.management.entities.UserInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<UserInfo,Long> {
    public UserInfo findByUserName(String userName);
}
