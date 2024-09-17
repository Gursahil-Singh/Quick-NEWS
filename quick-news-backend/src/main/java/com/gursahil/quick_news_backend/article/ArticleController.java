package com.gursahil.quick_news_backend.article;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("database")
@CrossOrigin("http://localhost:5173")
public class ArticleController {

    @Autowired
    private ArticleRepository articleRepository;

    @PostMapping("article")
    public Article postMethodName(@RequestBody Article newArticle) {
        return articleRepository.save(newArticle);
    }
    
    @GetMapping("articles")
    public List<Article> getMethodName() {
        return articleRepository.findAll();
    }
    
    @DeleteMapping("article/{id}")
    public void deleteArticle(@PathVariable Long id){
        articleRepository.deleteById(id);
    }

}
