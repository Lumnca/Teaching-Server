package app.feign;

import app.pojo.LoginRecord;
import app.pojo.Response;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "CourseServer",url = "http://localhost:8765")
public interface CourseFeignApi {
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    Response login(@RequestBody JSONObject object);
    @RequestMapping(value = "/user_info/{id}", method = RequestMethod.GET)
    Object getUserInfo(@PathVariable("id")String id);
}
