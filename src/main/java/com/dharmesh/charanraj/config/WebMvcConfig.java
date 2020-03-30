package com.dharmesh.charanraj.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

	/*
	 * The primary purpose of this method is to redirect requests to index.html. If
	 * we don't do this config then when the user tries to directly go to the /login
	 * url tomcat server will try to search for a login directory and an index.html
	 * inside it.
	 */
	@Override
	public void addViewControllers(ViewControllerRegistry registry) {
		registry.addViewController("/").setViewName("forward:/index.html");
		registry.addViewController("/login").setViewName("forward:/index.html");
		registry.addViewController("/home").setViewName("forward:/index.html");
		registry.addViewController("/home/**").setViewName("forward:/index.html");
	}

	/*
	 * @Override public void addInterceptors(InterceptorRegistry registry) {
	 * registry.addInterceptor(new
	 * LoginInterceptor()).addPathPatterns("/api/**").excludePathPatterns(
	 * "/api/user/getUser"); }
	 */

	/*
	 * @Override public void addCorsMappings(CorsRegistry registry) {
	 * registry.addMapping("/**").allowedMethods("HEAD", "GET", "PUT", "POST",
	 * "DELETE", "PATCH"); }
	 */

}