package app.admin;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity(name = "regist_users")
public class RegisterUser implements Serializable {
    @Id
    @Column(name = "user_id")
    private String id;
    private String password;
    private int state;
    @Column(name = "register_time")
    private String registertime;
    @Column(name = "register_tel")
    private String registertel;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }

    public String getRegistertime() {
        return registertime;
    }

    public void setRegistertime(String registertime) {
        this.registertime = registertime;
    }

    public String getRegistertel() {
        return registertel;
    }

    public void setRegistertel(String registertel) {
        this.registertel = registertel;
    }
}
