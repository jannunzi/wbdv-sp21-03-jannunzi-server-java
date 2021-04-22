package com.example.wbdvsp2103jannunziserverjava.repositories;

import com.example.wbdvsp2103jannunziserverjava.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface UserRepository
        extends CrudRepository<User, Integer> {
    @Query("select user From User user where user.username=:username")
    public User findUserByUsername(@Param("username") String username);

    @Query("select user From User user where user.username=:username and user.password=:password")
    public User findUserByCredentials(@Param("username") String username, @Param("password") String password);
}
