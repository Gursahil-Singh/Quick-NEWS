package com.gursahil.quick_news_backend;

import java.util.ArrayList;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewsApiResponse {

    public NewsApiResponse(){}
    public NewsApiResponse(int status, ArrayList<Latest> latest, String elapsedTime, int timestamp) {
        this.status = status;
        this.latest = latest;
        this.elapsedTime = elapsedTime;
        this.timestamp = timestamp;
    }


    public int getStatus() {
        return status;
    }


    public void setStatus(int status) {
        this.status = status;
    }


    public ArrayList<Latest> getLatest() {
        return latest;
    }


    public void setLatest(ArrayList<Latest> latest) {
        this.latest = latest;
    }


    public String getElapsedTime() {
        return elapsedTime;
    }


    public void setElapsedTime(String elapsedTime) {
        this.elapsedTime = elapsedTime;
    }


    public int getTimestamp() {
        return timestamp;
    }


    public void setTimestamp(int timestamp) {
        this.timestamp = timestamp;
    }


    public int status;
    @JsonProperty("Latest") 
    public ArrayList<Latest> latest;
    @JsonProperty("elapsed time")
    public String elapsedTime;
    public int timestamp;


 static class Latest{
    public String title;
    public String summary;
    public String getTitle() {
        return title;
    }
    public Latest(String title, String summary, String imageLink, String newsLink) {
        this.title = title;
        this.summary = summary;
        this.imageLink = imageLink;
        this.newsLink = newsLink;
    }
    public Latest() {
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getSummary() {
        return summary;
    }
    public void setSummary(String summary) {
        this.summary = summary;
    }
    public String getImageLink() {
        return imageLink;
    }
    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }
    public String getNewsLink() {
        return newsLink;
    }
    public void setNewsLink(String newsLink) {
        this.newsLink = newsLink;
    }
    @JsonProperty("image_link")
    public String imageLink;
    @JsonProperty("news_link")
    public String newsLink;
    }

}
