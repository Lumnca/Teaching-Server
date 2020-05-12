package app.user;

public class RegistUsers {

    private String user_id;
    private String password;
    private String regist_users;
    private String register_tel;
    private Integer state;

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRegist_users() {
        return regist_users;
    }

    public void setRegist_users(String regist_users) {
        this.regist_users = regist_users;
    }

    public String getRegister_tel() {
        return register_tel;
    }

    public void setRegister_tel(String register_tel) {
        this.register_tel = register_tel;
    }

    public Integer getState() {
        return state;
    }

    public void setState(Integer state) {
        this.state = state;
    }
}
