/*
*
*  用户数据
*
*/
new Vue({
    el : '#app',
    data : {
        name : 'Lumnca',
        address : '四川省成都市',
        followers : 127455111,
        following : 24,
        posts  : 57,
        basicInfo : [
            {
                title : 'ID',
                icon  : ' fa-credit-card',
                info  : 'L123456'
            },
            {
                title : '年龄',
                icon  : ' fa-caret-square-o-right',
                info  : '22'
            },
            {
                title : '生日',
                icon  : 'fa-calendar',
                info  : '1998/03/17'
            },
        ],
        contactInfo : [
            {
                title : '电话',
                icon  : 'fa-phone',
                info  : '13281101201'
            },
            {
                title : '邮箱',
                icon  : 'fa-envelope',
                info  : 'lumnca@163.ocm'
            },
            {
                title : '地址',
                icon  : 'fa-map-marker',
                info  : '四川省达州市'
            }
        ]
    }
})
