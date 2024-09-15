package com.gursahil.quick_news_backend;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:5173/")
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

    @GetMapping("title/{i}")
    public String getTitle(@PathVariable int i) {
        NewsApiResponse newsApiResponse = newsApiService.getNews();
        ArrayList<NewsApiResponse.Latest> newsList = newsApiResponse.getLatest();
        return newsList.get(i).getTitle();
    }

    @GetMapping("summary/{i}")
    public String getSummary(@PathVariable int i) {
        NewsApiResponse newsApiResponse = newsApiService.getNews();
        ArrayList<NewsApiResponse.Latest> newsList = newsApiResponse.getLatest();
        return newsList.get(i).getSummary();
    }

    @GetMapping("link/{i}")
    public String getLink(@PathVariable int i) {
        NewsApiResponse newsApiResponse = newsApiService.getNews();
        ArrayList<NewsApiResponse.Latest> newsList = newsApiResponse.getLatest();
        return newsList.get(i).getNewsLink();
    }

}
