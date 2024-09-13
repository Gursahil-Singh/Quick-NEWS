package com.gursahil.quick_news_backend;

import org.springframework.ai.ollama.OllamaChatModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/ai")
public class AIController {

    private OllamaChatModel chatModel;
    private static final String PROMPT = " What is java language. Give a response in 1 line";

    public AIController(OllamaChatModel chatModel) {
        this.chatModel = chatModel;
    }

    @GetMapping("prompt")
    public String proptResponse(){
       return chatModel.call(PROMPT);
    }

}
