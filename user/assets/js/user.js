/*
*
*  用户数据
*
*/
var Main = new Vue({
    el : '#app',
    data : {
        id  : 'xx',
        name : 'Lumnca',
        address : '四川省成都市',
        followers : 127455111,
        following : 24,
        posts  : 57,         //推送
        active : true,       //动态
        dialogImageUrl : '', //头像
        dialogVisible: false,
        pushMessage : false,
        basicInfo : [
            {
                title : 'ID',
                icon  : ' fa-credit-card',
                info  : 'L123456'
            },
            {
                title : '称昵',
                icon  : 'fa-user',
                info  : 'Lumnca'
            },
            {
                title : '地址',
                icon  : 'fa-hospital-o',
                info  : '四川省成都市'
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
    },
    methods: {
        handleRemove : function(file, fileList) {
          console.log(file, fileList);
        },
        handlePictureCardPreview : function(file) {
          this.dialogImageUrl = file.url;
          this.dialogVisible = true;
        }
      }
})
/*
*
*
*
*
*/