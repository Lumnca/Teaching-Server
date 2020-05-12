package app.request;


import app.feign.CourseFeignApi;
import app.feign.ZuulFeignApi;
import app.pojo.Response;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginApi {
    @Autowired
    CourseFeignApi api;
    @Autowired
    ZuulFeignApi api2;
    @PostMapping("login")
    public Response login(@RequestBody JSONObject object){
        return api.login(object);
    }

    @GetMapping("zuulTest")
    public String zuulTest(){
        return api2.test();
    }

}
