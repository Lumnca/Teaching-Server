package app.course;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "course_info")
public class Course {
    @Id
    private String id;
    private String name;
    private String teacher;
    private String type;
    private int is_cost;
    private int price;
    private String start_date;
    private String start_time;
    private String course_icon;
    private String course_info;
    private int course_numbers;
    private Double level;
    private String img_src;
    private String other;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getIs_cost() {
        return is_cost;
    }

    public void setIs_cost(int is_cost) {
        this.is_cost = is_cost;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getStart_date() {
        return start_date;
    }

    public void setStart_date(String start_date) {
        this.start_date = start_date;
    }


    public String getStart_time() {
        return start_time;
    }

    public void setStart_time(String start_time) {
        this.start_time = start_time;
    }

    public String getCourse_icon() {
        return course_icon;
    }

    public void setCourse_icon(String course_icon) {
        this.course_icon = course_icon;
    }

    public String getCourse_info() {
        return course_info;
    }

    public void setCourse_info(String course_info) {
        this.course_info = course_info;
    }

    public int getCourse_numbers() {
        return course_numbers;
    }

    public void setCourse_numbers(int course_numbers) {
        this.course_numbers = course_numbers;
    }

    public Double getLevel() {
        return level;
    }

    public void setLevel(Double level) {
        this.level = level;
    }

    public String getImg_src() {
        return img_src;
    }

    public void setImg_src(String img_src) {
        this.img_src = img_src;
    }

    public String getOther() {
        return other;
    }

    public void setOther(String other) {
        this.other = other;
    }
}

