package app.feign;

import app.pojo.Response;
import com.alibaba.fastjson.JSONObject;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@FeignClient(name = "Zuul",url = "http://localhost:8762")
public interface ZuulFeignApi {
    @RequestMapping(value = "courseserver/test", method = RequestMethod.GET)
    String test();

}
