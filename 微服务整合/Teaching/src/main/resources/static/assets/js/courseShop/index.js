var resources = {
    public: [
        { name: '课程/技术/辅助', imgurl: '../assets/img/course3.png', classhour: 30, user: '萨尼', type: '免费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/云/辅助', imgurl: '../assets/img/course1.png', classhour: 42, user: '沙棘', type: '免费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/技术/辅助', imgurl: '../assets/img/course2.png', classhour: 30, user: '萨尼', type: '免费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/美术/辅助', imgurl: '../assets/img/course4.png', classhour: 27, user: '沃家', type: '免费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/美术/辅助', imgurl: '../assets/img/course1.png', classhour: 27, user: '沃家', type: '免费', student: Math.floor(Math.random() * 1500) }
    ],
    private: [
        { name: '课程/技术/辅助', imgurl: '../assets/img/course1.png', classhour: 30, user: '萨尼', type: '付费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/技术/辅助', imgurl: '../assets/img/course1.png', classhour: 30, user: '萨尼', type: '付费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/美术/辅助', imgurl: '../assets/img/course4.png', classhour: 27, user: '沃家', type: '付费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/技术/辅助', imgurl: '../assets/img/course2.png', classhour: 30, user: '萨尼', type: '付费', student: Math.floor(Math.random() * 1500) },
        { name: '课程/技术/辅助', imgurl: '../assets/img/course3.png', classhour: 30, user: '萨尼', type: '付费', student: Math.floor(Math.random() * 1500) }
    ]
}
var checkAge = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('年龄不能为空'));
    }
    setTimeout(() => {
        if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
        } else {
            if (value < 18) {
                callback(new Error('必须年满18岁'));
            } else {
                callback();
            }
        }
    }, 1000);
};
var validateID = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入账号'));
    } else {
        if (app.loginForm.id.indexOf("'") !== -1 || app.loginForm.id.indexOf("(") !== -1 || app.loginForm.id.indexOf(")") !== -1) {
            console.log(app.loginForm.id);
            callback(new Error('非法字符'));
        }
        else {
            callback();
        }

    }
};
var validatePass = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请输入密码'));
    } else {
        callback();
    }
};
var validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    } else if (value !== this.loginForm.pass) {
        callback(new Error('两次输入密码不一致!'));
    } else {
        callback();
    }
};

var app = new Vue({
    el: '#app',
    data: {
        host :'http://127.0.0.1:8081',
        search: '',
        activeName: 'style',
        ac: 'info',
        circleUrl: "",
        course: [
            {
                type: 'style',
                name: '教育',
                resources: resources
            },
            { type: 'shenghuo', name: '生活', resources: resources }, { type: 'keji', name: '科技', resources: resources }, { type: 'wenxue', name: '文学', resources: resources },
            { type: 'ligong', name: '理工', resources: resources }, { type: 'xinli', name: '心理', resources: resources }, { type: 'jishu', name: '技术', resources: resources },
        ],
        islogin: false,
        centerDialogVisible: false,
        loginForm: {
            pass: '',
            checkPass: '',
            age: '',
            id: '',
            number: 0,
            result: -1
        },
        rules: {
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
                { validator: checkAge, trigger: 'blur' }
            ],
            id: [
                { validator: validateID, trigger: 'blur' }
            ]
        },
        user: JSON.parse(window.localStorage.getItem('_user')) || { id: '', name: 'Lumnca' },
        form1: {
            isCost: '全部',
            type: []
        },
        resources: [],
        res: [],
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        currentPage: 1,
        pages: 5
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        submitForm(formName) {
            let login = this.getLoginInfo();
            this.$refs[formName].validate((valid) => {
                if (valid && this.loginForm.number === this.loginForm.result) {

                    axios.post(app.host + '/login',{
                        name : this.loginForm.id,
                        password : this.loginForm.pass
                    })
                        .then(function (response) {
                            if (response.data.code === 200) {

                                app.$message({
                                    message: response.data.message,
                                    type: 'success'
                                });
                                app.user.id = app.loginForm.id;
                                app.user.name = app.loginForm.id;

                                app.islogin = true;
                                app.centerDialogVisible = false;
                                window.localStorage.setItem('_user', JSON.stringify(app.user));
                            }
                            else {
                                app.$message.error(response.data.message);
                            }
                        })
                        .catch(function (error) {
                            app.$message.error('网络错误！');
                        });
                } else {
                    this.$message.error('验证错误！检查输入');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        out() {
            this.user = { id: '' }
            window.localStorage.clear('_user');
            this.islogin = false;
        },
        rehref(url) {
            window.location.href = url;
        },
        sortPeople() {
            this.res.sort((a, b) => {
                return - a.numbers + b.numbers;
            })
        },
        sortLevel() {
            this.res.sort((a, b) => {
                return - a.level + b.level;
            })
        },
        sortPrice() {
            this.res.sort((a, b) => {
                return - a.price + b.price;
            })
        },
        handleCurrentChange(val) {
            this.resources = [];
            this.res.forEach((e, i) => {
                if (i >= (val - 1) * 20) {
                    app.resources.push(e);
                }
            });
        },
        getLoginInfo() {
            let ip = returnCitySN["cip"];
            let time = new Date();
            let format = time.getFullYear() + "/" + (time.getMonth() + 1) + "/" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes()+":" + time.getSeconds();
            let id = this.loginForm.id;
            let ps = this.loginForm.pass;

            var login = {
                user_id: id,
                input_pw: ps,
                login_time: format,
                login_ip: ip,
                index: 1
            }
            return login;
        }
    },
    computed: {
        isLoginCheck() {

            if (this.user.id == '') {
                this.islogin = false;
                if (this.loginForm.number == this.loginForm.result) {
                    this.$message({
                        message: '验证成功!',
                        type: 'success'
                    });
                }
                return '未登录'
            }
            else {
                this.islogin = true;
                return ''
            }
        },
        classification() {
            let t = this.form1.isCost;
            this.resources = [];
            if (t != '全部') {
                this.res.forEach((e, i) => {
                    if (e.type == t) {
                        this.resources.push(e);
                    }
                });
            }
            else {
                this.res.forEach((e, i) => {
                    if (i >= (app.currentPage - 1) * 20) {
                        app.resources.push(e);
                    }
                });
            }
            return t;
        }
    },
})


