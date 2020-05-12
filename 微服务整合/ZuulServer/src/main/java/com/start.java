package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;


@EnableZuulProxy
@SpringBootApplication
@EnableEurekaClient
public class start {
    @Bean
    public PreRequestLogFilter preRequestLogFilter(){
        return new PreRequestLogFilter();
    }
    @Bean
    public PostRequestFilter postRequestFilter(){
        return new PostRequestFilter();
    }
    public static  void main(String[] args){
        SpringApplication.run(start.class,args);
    }
}
