package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {
    @GetMapping
    public String index() {
        System.out.println("fsdfsdgsdgf");
        return "index.html";
    }

    @RequestMapping("/{path:[^\\.]*}")
    public String forwardReactRoutes() {
        return "forward:/";
    }
}