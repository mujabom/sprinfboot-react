package com.example.demo;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class Controller {

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/greet/{name}")
    public String greetPerson(@PathVariable String name) {
        return "Hello, " + name + "!";
    }

    @PostMapping("/message")
    public String receiveMessage(@RequestBody String message) {
        return "Received message: " + message;
    }
}


