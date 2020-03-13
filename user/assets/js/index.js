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
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/user/user/colleague.html'
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
        imgurl :'',
        appInfo : [
            {
                title : '个人信息',
                icon : 'fa-heart',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/user/user/userInfo.html',
                number : '0',
                style : 'label-default'
            },
            {
                title : '设置',
                icon : 'fa-wrench',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/user/user/setting.html',
                number : 11,
                style : 'label-danger'
            },
            {
                title : '钱包',
                icon : ' fa-credit-card',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/user/user/cost.html',
                number : 23,
                style : 'label-info'
            },
            {
                title : '文件',
                icon : ' fa-file',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/user/user/file.html',
                number : 36,
                style : 'label-primary'
            }
        ]
    },
    mounted() {
        let id = JSON.parse(window.localStorage.getItem('_user')).id;
        axios.get('http://127.0.0.1:8081/user_info/'+id)
        .then(function (response) {
            _u1.name = response.data.name;
            _u1.imgurl = response.data.imgurl;
        })
        .catch(function () {
            //响应失败的操作
            alert("请求失败!");
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
                href : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\index.html',
                childen : []
            },
            {
                title : '课程管理',
                icon  : 'fa-book',
                href : '#',
                childen : [
                    {
                        title : '查看已有课程',
                        icon  : ' fa-search',
                        href  : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\course\\lookUpCourse.html'
                    },
                    {
                        title : '添加新有课程',
                        icon  : 'fa-plus',
                        href  : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\course\\addNewCourse.html'
                    },
                    {
                        title : '删除已有课程',
                        icon  : 'fa-minus',
                        href  : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\course\\deleteCourse.html'
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
                        href  : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\teacher\\addMyCourse.html'
                    },
                    {
                        title : '编辑课堂',
                        icon  : '  fa-edit',
                        href  : 'D:\\GitHub warehouse 2\\teaching\\Teaching-Server\\user\\teacher\\courseEdit.html'
                    }
                ]              
            },
        ]
    }
})
