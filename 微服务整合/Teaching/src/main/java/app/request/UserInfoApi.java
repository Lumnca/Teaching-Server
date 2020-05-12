package app.request;


import app.feign.CourseFeignApi;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserInfoApi {
    @Autowired
    CourseFeignApi api;

    @GetMapping("user_info/{id}")
    public Object getUserInfoById(@PathVariable("id") String id){
        return api.getUserInfo(id);
    }
}
