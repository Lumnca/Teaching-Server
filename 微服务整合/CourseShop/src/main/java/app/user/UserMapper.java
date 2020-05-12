package app.user;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface UserMapper {
    @Select("SELECT * FROM web.regist_users where user_id = #{name} and password = #{password}")
    RegistUsers loginCheck(String name,String password);
}
