package com.example.wbdvsp2103jannunziserverjava.controllers;

import com.example.wbdvsp2103jannunziserverjava.models.User;
import com.example.wbdvsp2103jannunziserverjava.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@RestController
@CrossOrigin(
        origins = "http://localhost:3000",
        allowCredentials = "true")
public class UserController {
    @Autowired
    UserRepository repository;
    
    @PostMapping("/api/login")
    public User login(
            @RequestBody User credentials,
            HttpSession session) {
        User existingUser = repository.findUserByCredentials(
                credentials.getUsername(),
                credentials.getPassword());
        if(existingUser != null) {
            session.setAttribute("profile", existingUser);
            return existingUser;
        }
        return null;
    }
    
    
    @PostMapping("/api/register")
    public User register(
            @RequestBody User newUser,
            HttpSession session
    ) {
        User existingUser = repository.findUserByUsername(newUser.getUsername());
        if(existingUser == null) {
            newUser = repository.save(newUser);
            session.setAttribute("profile", newUser);
        }
        return null;
    }
    @GetMapping("/api/profile")
    public User profile(HttpSession session) {
        return (User) session.getAttribute("profile");
    }
    @GetMapping("/api/profile/{userId}")
    public User profile(@PathVariable("userId") Integer id) {
        return repository.findById(id).get();
    }
}
