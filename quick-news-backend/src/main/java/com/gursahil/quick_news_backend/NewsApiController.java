package com.gursahil.quick_news_backend;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class NewsApiController {

    @Autowired
    private NewsApiService newsApiService;

    @GetMapping("titles")
    public ArrayList<String> getAllTitles() {
        NewsApiResponse newsApiResponse = newsApiService.getNews();
        ArrayList<NewsApiResponse.Latest> newsList = newsApiResponse.getLatest();
        ArrayList<String> newsTitles = new ArrayList<>();
        for(int i = 0; i<newsList.size() ;i++){
            newsTitles.add(newsList.get(i).getTitle());
        }
        return newsTitles;
    }

}
