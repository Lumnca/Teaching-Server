package app.beans;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BeanTest {
    @Autowired
    AdminUser adminUser;
    @GetMapping("beans")
    public String get(){
        return adminUser.getName();
    }
}
