package com.gursahil.quick_news_backend;


import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/ai")
@CrossOrigin("http://localhost:5173/")
public class AIController {

    private OllamaChatModel chatModel;
    private static final String PROMPT = "From the given article title and its summary create a short title. the max word limit is 4 and only give one response. the title is:";

    public AIController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("prompt")
    public String proptResponse(){
       return chatModel.call(PROMPT);
    }

    @GetMapping("title/{title}/summary/{summary}")
    public String postMethodName(@PathVariable String title,@PathVariable String summary) {
        String articlePrompt = PROMPT + title + " and the summary is: " + summary;
        return chatModel.call(articlePrompt);
    }
    

}
