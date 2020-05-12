package app.course;


import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Service;

import java.util.List;

@Mapper
@Service
public interface CourseMapper {
    @Select("select * from course_work where cid = #{cid} and id != 0")
    List<CourseWork> getWorkByCid(String cid);
    @Select("select * from file_work where cid = #{cid} and id != 0")
    List<FileWork> getFileWorkByCid(String cid);
    @Select("select * from course_exam where cid = #{cid} and id != 0")
    List<CourseExam> getCourseExamById(String cid);
    @Select("select * from work_submit where uid = #{uid} and wid = #{wid} and type = 1 and state = 1")
    Work getSubmitWork(String uid, Integer wid);
    @Select("select w.id,c.name,c.cid,w.uid,w.wid,c.start_date,c.end_date,w.date,w.state,w.score,w.type from course_work c,work_submit w where c.cid = #{cid} and c.id = w.wid and w.uid = #{uid}")
    Submit getSubmit(String cid, String uid, Integer wid);
    @Select("select * from work_submit where uid = #{uid} and wid = #{wid} and state = 1 and type = 2")
    Work getFileWorkSubmit(String uid, String wid);
    @Select("select * from exam_submit where uid = #{uid} and eid = #{eid} and state = 1")
    ExamSubmit getExamSubmit(String uid, Integer eid);

}
