package app.api;

import app.course.*;
import app.fileServer.FileManage;
import app.response.Response;
import app.user.RegistUsers;
import app.user.UserDao;
import com.alibaba.fastjson.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
public class WebApi {

    @Autowired
    CourseMapper courseMapper;
    @Autowired
    UserDao userDao;
    /**
     * 写入Session接口
     * @param object 前端传递的JSON对象应该包含key和value属性 如：{key:'xxx',value:'data'}
     * @param request
     * @return 请求状态类
     */
    @PostMapping("/writeSession")
    public Response writeSession(@RequestBody JSONObject object, HttpServletRequest request){
        String key = object.getString("key");
        Object value = object.get("value");
        request.getSession().setAttribute(key,value);
        return new Response(200,"写入Session成功！");
    }

    /**
     * 获取Session
     * @param key Session的key值
     * @param request
     * @return Session的键值数据
     */
    @GetMapping("/getSession/{key}")
    public Object getSession(@PathVariable(name = "key")String key,HttpServletRequest request){
        return request.getSession().getAttribute(key);
    }

    /**
     * 登录接口
     * @param object 前端传入的JSON字符串 需要含有name和password
     * @return
     */
    @PostMapping("/login")
    public Response login(@RequestBody JSONObject object,HttpServletRequest request){
        String name = object.getString("name");
        String password = object.getString("password");
        RegistUsers user = userDao.loginCheck(name,password);
        if(user!=null){
            if(user.getState()==1){
                request.getSession().setAttribute("user",user);
                return  new Response(200,"登录成功！");
            }
            else{
                return  new Response(401,"登录失败，账户已被锁定！");
            }
        }
        else{
            return  new Response(400,"登录失败，用户名或者密码错误！");
        }
    }

    @GetMapping("/test")
    public String test1(){
        return "test";
    }

    @GetMapping("/admin/t1")
    public String test2(){
        return "test";
    }

    @GetMapping("/teacher/t1")
    public String test3(){
        return "test";
    }


    @PostMapping("/file")
    public Response getFile(@RequestBody JSONObject object){
        return new FileManage().mkdir(object.get("path").toString());
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
        File dest = new File(filePath+"/static/img/"+fileName);
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
    public Work getSubmit(String uid, Integer wid){
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

}
