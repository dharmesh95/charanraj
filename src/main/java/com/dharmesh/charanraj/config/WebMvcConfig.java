package com.dharmesh.charanraj.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
 * The primary purpose of this class is to redirect requests to index.html. 
 * If we don't do this config then when the user tries to directly go to the /login url 
 * tomcat server will try to search for a login dirtectory and an index.html inside it.
 */

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
		registry.addViewController("/login").setViewName("forward:/index.html");
		registry.addViewController("/home").setViewName("forward:/index.html");
		registry.addViewController("/home/**").setViewName("forward:/index.html");
	}
}