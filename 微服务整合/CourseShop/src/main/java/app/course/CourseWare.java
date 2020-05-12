package app.course;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "course_ware")
public class CourseWare {
    @Id
   private  String id;
   private String notice;
   private String ware;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNotice() {
        return notice;
    }

    public void setNotice(String notice) {
        this.notice = notice;
    }

    public String getWare() {
        return ware;
    }

    public void setWare(String ware) {
        this.ware = ware;
    }
}
