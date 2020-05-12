package app.sms;

import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;


@RestController
@RequestMapping("/app/sms")
public class SmsV {
    @Autowired
    private RestTemplate restTemplate;

    /**
     * 单发短信测试
     */
    @RequestMapping(value = "/sendsmsTest",method = RequestMethod.GET)
    public String sendsmsTest(){
        //单发短信API
        String url = "https://open.ucpaas.com/ol/sms/sendsms";
        JSONObject jsonObject = new JSONObject();
        //基础配置，在开发平台认证后获取
        jsonObject.put("sid","2aa4dd7b877bd42ad1b9777c6281f7cd");
        jsonObject.put("token","937556e98ac3b6f1a7968dca4050ff15");
        jsonObject.put("appid","b96f41e4ccb94e4aba8d7d68fc6f5871");
        //模板ID，在开发平台创建模板对应的模板ID
        jsonObject.put("templateid", "498295");
        //模板对应的参数，参数之间拼接用逗号作为间隔符
        jsonObject.put("param", "1315");
        //要发送的手机号
        jsonObject.put("mobile", "13281101201");
        //用户透传ID，随状态报告返回,可以不填写
        jsonObject.put("uid","");
        String json = JSONObject.toJSONString(jsonObject);
        //使用restTemplate进行访问远程服务
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON_UTF8);
        HttpEntity<String> httpEntity = new HttpEntity<>(json, headers);
        String result = restTemplate.postForObject(url, httpEntity, String.class);
        return result;
    }
}
