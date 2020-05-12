/*
*
*
*用户信息装配
*
*/
var userMessage = [
    {
        name : '李华',
        date : '2019/8/12 12:23',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : false
    },
    {
        name : '李华',
        date : '2019/8/11 06:07',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : false
    },
    {
        name : '李华',
        date : '2019/8/10 22:45',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : false
    },
    {
        name : '李华',
        date : '2019/8/9 15:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : false
    },
    {
        name : '李华',
        date : '2019/8/8 14:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : false
    }, 
    {
        name : '李华',
        date : '2019/8/4 14:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : '',
        isRead : true
    }, 
]

 new Vue({
    el : '#app1',
    data : {
        message : userMessage
    },
    computed : {
        isRead : function(){
            var number = 0;
            for(var i=0;i<this.message.length;i++){
                if(this.message[i].isRead===false){
                    number++;
                }
            }
           return number;
        }
    }
})

/*
*
*系统消息装配
*
*/
new Vue({
    el : '#app2',
    data : {
        message : [
            {
                title : '用户须知',
                icon : 'fa-comment',
                info : '通知信息'
            },
            {
                title : '欢迎使用',
                icon : 'fa-bullhorn',
                info : '系统信息'
            }
        ]
    }
})
/*
*
* 应用列表装配
*
*/
new Vue({
    el : '#app3',
    data : {
        appInfo : [
            {
                title : '好友列表',
                icon : ' fa-users',
                href : 'colleague.html'
            },
            {
                title : '排名表',
                icon : 'fa-bar-chart-o',
                href : ''
            },
            {
                title : '系统通知',
                icon : 'fa-bell',
                href : '#'
            },
            {
                title : '用户论坛',
                icon : ' fa-envelope',
                href : '#'
            },
            {
                title : '文件管理',
                icon : 'fa-folder',
                href : '#'
            }
        ]
    }
})

/*
*
*
*用户模块设置
*
*/
var _u1 = new Vue({
    el : '#app4',
    data : {
        name : 'Lumnca',
        imgurl : 'http://127.0.0.1:8081/public/',
        host : 'http://127.0.0.1:8081',
        appInfo : [
            {
                title : '个人信息',
                icon : 'fa-heart',
                href : 'userInfo.html',
                number : '0',
                style : 'label-default'
            },
            {
                title : '设置',
                icon : 'fa-wrench',
                href : 'setting.html',
                number : 11,
                style : 'label-danger'
            },
            {
                title : '钱包',
                icon : ' fa-credit-card',
                href : 'cost.html',
                number : 23,
                style : 'label-info'
            },
            {
                title : '文件',
                icon : ' fa-file',
                href : 'file.html',
                number : 36,
                style : 'label-primary'
            }
        ]
    },
    mounted() {
        let user =  JSON.parse(window.localStorage.getItem('_user'));
        axios.get('http://127.0.0.1:8081/user_info/'+user.id)
        .then(function (response) {
            _u1.name = response.data.name;
            user.name =  response.data.name;
            _u1.imgurl += response.data.imgurl;
            window.localStorage.setItem("_user",JSON.stringify(user));
        })
        .catch(function () {
            //响应失败的操作
            alert("用户数据请求失败!");
        });
    },
})

/*
*
*左侧菜单数据装配
*
*/
new Vue({
    el : '#app5',
    data : {

        user : {
            iden : 'teacher'
        },

        functions : [
            {
                title : '主页',
                icon  : 'fa-laptop',
                href : 'index.html',
                childen : []
            },
            {
                title : '课程管理',
                icon  : 'fa-book',
                href : '#',
                childen : [
                    {
                        title : '查看已选课程',
                        icon  : 'fa-search',
                        href  : 'student/lookUpCourse.html'
                    },
                    {
                        title : '添加新选课程',
                        icon  : 'fa-plus',
                        href  : 'student/addNewCourse.html'
                    },
                    {
                        title : '删除已选课程',
                        icon  : 'fa-minus',
                        href  : 'student/deleteCourse.html'
                    }
                ]              
            },
            {
                title : '我的课堂',
                icon  : 'fa-briefcase',
                href : '#',
                childen : [
                    {
                        title : '新设课堂',
                        icon  : 'fa-plus',
                        href  : 'teacher/addMyCourse.html'
                    },
                    {
                        title : '编辑课堂',
                        icon  : 'fa-edit',
                        href  : 'teacher/courseEdit.html'
                    }
                ]              
            },
        ]
    }
})
