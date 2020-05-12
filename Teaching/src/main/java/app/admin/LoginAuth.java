package app.admin;

import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
public class LoginAuth {
    @PostMapping("adminLogin")
    public String login(@Param(value = "id")String id, @Param(value = "pw")String pw, HttpSession session){
        if(id.equals("lumnca")&&pw.equals("123456")){
            session.setAttribute("admin","lumnca");
            return "登录成功!";
        }
        else{
            return "登录失败!";
        }
    }
}
