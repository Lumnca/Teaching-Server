package app.pojo;



public class LoginRecord {
    private Integer index;
    private String user_id;
    private String input_pw;
    private String login_time;
    private String login_ip;
    private String login_address;

    public Integer getIndex() {
        return index;
    }

    public void setIndex(Integer index) {
        this.index = index;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getInput_pw() {
        return input_pw;
    }

    public void setInput_pw(String input_pw) {
        this.input_pw = input_pw;
    }

    public String getLogin_time() {
        return login_time;
    }

    public void setLogin_time(String login_time) {
        this.login_time = login_time;
    }

    public String getLogin_ip() {
        return login_ip;
    }

    public void setLogin_ip(String login_ip) {
        this.login_ip = login_ip;
    }

    public String getLogin_address() {
        return login_address;
    }

    public void setLogin_address(String login_address) {
        this.login_address = login_address;
    }
}
