package app.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserDao implements UserMapper {

    @Autowired
    UserMapper userMapper;

    @Override
    public RegistUsers loginCheck(String name, String password) {
        return userMapper.loginCheck(name,password);
    }
}
