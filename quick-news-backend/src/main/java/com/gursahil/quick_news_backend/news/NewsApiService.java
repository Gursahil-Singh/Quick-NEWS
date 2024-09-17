package com.gursahil.quick_news_backend.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class NewsApiService {

    private static final String API = "https://bbc-api.vercel.app/latest?lang=english" ;

    @Autowired
    private RestTemplate restTemplate;

    public NewsApiResponse getNews(){
        ResponseEntity<NewsApiResponse> response = restTemplate.exchange(API,HttpMethod.GET,null,NewsApiResponse.class);
        NewsApiResponse body = response.getBody();
        return body;
    }
}
