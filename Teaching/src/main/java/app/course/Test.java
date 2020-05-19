package app.course;

import app.logger.Log;
import app.redis.BookDao;
import app.reponseData.Response;
import app.reponseData.User;
import com.alibaba.fastjson.JSONObject;
import app.fileServer.FileManage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
public class Test {
    @Autowired
    CourseMapper courseMapper;
    @GetMapping("/test")
    public Response getTest(String id,String pw){
        if(id.equals("1")&&pw.equals("2")){
            return new Response(200,"登录成功");
        }
        else{
            return new  Response(300,"登录失败,请检查输入");
        }
    }
    @PostMapping("/file")
    public Response getFile(@RequestBody JSONObject object){
        return new FileManage().mkdir(object.get("path").toString());
    }
    @CrossOrigin
    @GetMapping("/get")
    public User getData(String id){
        System.out.println(id);
        return new User("as12","Lunbcsa","1315151551",24,"15155@qq.com","四川","u1.jpg");
    }
    @CrossOrigin
    @PostMapping("/set")
    public Response setData(@RequestBody User user){
        System.out.println(user.getId());
        System.out.println(user.getAge());
        return new Response(500,"修改成功！");
    }
    @CrossOrigin
        @PostMapping("/upload")
        public  void upload(MultipartFile uploadFile, HttpServletRequest request){
            if (uploadFile.isEmpty()) {
                System.out.println("NULL");
            }

            String fileName = uploadFile.getOriginalFilename();
            String filePath = System.getProperty("user.dir") ;
            System.out.println(filePath+fileName);
            File dest = new File(filePath+"/static/public/"+fileName);
            try {
                uploadFile.transferTo(dest);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    @CrossOrigin
    @GetMapping("delete")
    public Response deleteFile(String file){
        FileManage fileManage = new FileManage();
        return fileManage.delete(file);
    }
    @CrossOrigin
    @GetMapping("getworks")
    public List<CourseWork> getWorks(String cid){
        return courseMapper.getWorkByCid(cid);
    }
    @CrossOrigin
    @GetMapping("getfilework")
    public List<FileWork> getFileWorks(String cid){
        return courseMapper.getFileWorkByCid(cid);
    }
    @CrossOrigin
    @GetMapping("getexam")
    public List<CourseExam> getCourseExam(String cid){
        return courseMapper.getCourseExamById(cid);
    }
    @CrossOrigin
    @GetMapping("sumbitwork")
    public Work getSubmit(String uid,Integer wid){
        return courseMapper.getSubmitWork(uid,wid);
    }
    @CrossOrigin
    @GetMapping("submitdate")
    public Submit getSumbitData(String cid,String uid,Integer wid){
        return courseMapper.getSubmit(cid, uid, wid);
    }
    @CrossOrigin
    @GetMapping("submitfiledate")
    public Work getSubmit(String uid,String wid){
        return courseMapper.getFileWorkSubmit(uid, wid);
    }
    @CrossOrigin
    @GetMapping("submitexams")
    public ExamSubmit getExamSubmit(String uid,Integer eid){
        return courseMapper.getExamSubmit(uid, eid);
    }
    @CrossOrigin
    @GetMapping("getLogs")
    public List<Log> getLogs(){
        return courseMapper.getLogs();
    }
}
