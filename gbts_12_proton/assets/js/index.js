
/*
*
*
*用户信息装配
*
*/
new Vue({
    el : '#app1',
    data : {
        message : [
            {
                title : '新消息',
                date : '2019/9/10 22:14'
            },
            {
                title : '新消息',
                date : '2019/9/10 23:04'
            },
            {
                title : '新消息',
                date : '2019/9/11 06:08'
            },
            {
                title : '新消息',
                date : '2019/9/10 10:09'
            },
        ]
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
                href : 'https://lumnca.github.io/my-zhuye/'
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
new Vue({
    el : '#app4',
    data : {
        name : 'Lumnca',
        appInfo : [
            {
                title : '个人信息',
                icon : 'fa-heart',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/gbts_12_proton/user/userInfo.html',
                number : '0',
                style : 'label-default'
            },
            {
                title : '设置',
                icon : 'fa-wrench',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/gbts_12_proton/user/setting.html',
                number : 11,
                style : 'label-danger'
            },
            {
                title : '钱包',
                icon : ' fa-credit-card',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/gbts_12_proton/user/cost.html',
                number : 23,
                style : 'label-info'
            },
            {
                title : '文件',
                icon : ' fa-file',
                href : 'file:///D:/GitHub%20warehouse%202/teaching/Teaching-Server/gbts_12_proton/user/file.html',
                number : 36,
                style : 'label-primary'
            }
        ]
    }
})

/*
*
*左侧菜单数据装配
*
*/
new Vue({
    el : '#app5',
    data : {
        functions : [
            {
                title : '功能1',
                icon  : 'fa-laptop',
                href : '',
                childen : []
            },
            {
                title : '功能2',
                icon  : 'fa-file-text',
                href : '#',
                childen : [
                    {
                        title : '子模块1',
                        icon  : 'fa-car',
                        href  : 'https://www.baidu.com/'
                    },
                    {
                        title : '子模块2',
                        icon  : 'fa-envelope',
                        href  : '#'
                    }
                ]              
            },
            {
                title : '功能3',
                icon  : 'fa-briefcase',
                href : '#',
                childen : [
                    {
                        title : '子模块1',
                        icon  : 'fa-align-left',
                        href  : '#'
                    },
                    {
                        title : '子模块2',
                        icon  : ' fa-outdent',
                        href  : '#'
                    }
                ]              
            },
        ]
    }
})
