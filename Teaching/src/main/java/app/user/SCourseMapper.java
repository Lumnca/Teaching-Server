package app.user;


import app.course.Course;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Mapper
@Service
public interface SCourseMapper {
    @Select("select * from course_info c,user_course u where c.id = u.cid and u.uid = #{id} and u.iden = 'T'")
    List<Course > getMyCourse(String id);
    @Insert("insert into user_course values(#{uid},#{cid},#{iden})")
    int addSCourse(SCourse sc);
    @Delete("delete from user_course where cid = #{id}  and uid != ''")
    int delSCourse(String id);
    @Select("select * from user_course u,course_info c where u.cid = c.id and u.iden = 'S' and u.uid = #{id}")
    List<Course> getAllSCourse(String id);
    @Delete("delete from user_course where cid = #{cid}  and uid = #{uid}")
    int delSC(String uid,String cid);
    @Update("update course_info set course_numbers = (course_numbers+1) where id = #{id}")
    int addSCNumber(String id);
    @Update("update course_info set course_numbers = (course_numbers-1) where id = #{id}")
    int plusSCNumber(String id);
}
