package app.user;

import app.course.Course;
import app.reponseData.Response;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserRequset {

    @Autowired
    SCourseMapper courseMapper;
    @GetMapping("gmc")
    @CrossOrigin
    public List<Course> getSc( String id){
        return   courseMapper.getMyCourse(id);
    }
    @CrossOrigin
    @PostMapping("asc")
    public Response addSc(@RequestBody SCourse sCourse){
        if(courseMapper.addSCourse(sCourse)!=0){
            courseMapper.addSCNumber(sCourse.getCid());
            return new Response(200,"添加数据成功！");
        }
        else{
            return new Response(500,"添加数据失败!");
        }
    }
    @CrossOrigin
    @PostMapping("dasc")
    public Response delAllSc(@RequestBody JSONObject object){
        if(courseMapper.delSCourse(object.getString("id"))!=0){
            return new Response(200,"删除数据成功！");
        }
        else{
            return new Response(200,"删除数据失败!");
        }
    }
    @CrossOrigin
    @GetMapping("gasc")
    public List<Course> getAllSCourse(String id){
        return courseMapper.getAllSCourse(id);
    }
    @CrossOrigin
    @PostMapping("dsc")
    public Response delMeSC(@RequestBody JSONObject object){
        String uid = object.getString("uid");
        String cid = object.getString("cid");
        if(courseMapper.delSC(uid,cid)!=0){
            courseMapper.plusSCNumber(cid);
            return new Response(200,"删除已选课程成功!");
        }
        else{
            return new Response(500,"删除已选课程失败!");
        }
    }

}
