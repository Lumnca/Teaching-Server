package app.client;

import com.alibaba.fastjson.JSON;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.stream.Collectors;

@RestController
public class Cookies {
    @GetMapping("/cookies")
    public String getCookies(HttpServletRequest request, HttpServletResponse response){
        Cookie cookie = new Cookie("id","JA123456");
        response.addCookie(cookie);
        return JSON.toJSONString(cookie);
    }
    @GetMapping("/all-cookies")
    public String readAllCookies(HttpServletRequest request) {

        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            return Arrays.stream(cookies)
                    .map(c -> c.getName() + "=" + c.getValue())
                    .collect(Collectors.joining(", "));
        }

        return "No cookies";
    }
}
