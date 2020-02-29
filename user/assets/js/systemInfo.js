new Vue({
    el : '#app',
    data : {
        ia :"aaa",
        type : [
            {
                title : '系统通知',
                number : 2,
                noRead : 1,
                level : 'label-info',
                href : ''
            },
            {
                title : '账户通知',
                number : 1,
                noRead :1,
                level : 'label-warning',
                href : ''
            },
            {
                title : '紧急通知',
                number : 1,
                noRead : 1,
                level : 'label-danger' ,
                href : ''
            }
        ],
        message1 : [
            {
                title : '欢迎使用',
                href : '',
                info : '欢迎使用本产品服务！',
                date : '2019/9/21 14:19'
            },
            {
                title : '欢迎使用',
                href : '',
                info : '欢迎使用本产品服务！',
                date : '2019/9/22 14:19'
            }
        ],
        message2 : [
            {
                title : '开通账户',
                href : '',
                info : '以为你开通初始账户',
                date : '2019/9/21 14:19'
            }
        ],
        message3 : [
            {
                title : '用户信息',
                href : '',
                info : '更改你的账户初始密码，这户保障你的账户安全',
                date : '2019/9/21 14:19'
            }
        ]
    },
    methods : {
        open1(index) {
            this.$alert(this.message1[index].info+"。 发送时间: "+this.message1[index].date, this.message1[index].title, {
              confirmButtonText: '了解',
              callback: action => {
                this.$message({
                  type: 'info',
                  message: `以了解此信息`
                });
                setTimeout(function(){
                    location.reload();
                },2000);
              }
              
            });
           
        },
        open2(index) {
            this.$confirm(this.message2[index].info+"。 发送时间: "+this.message2[index].date, this.message2[index].title, {
              confirmButtonText: '确认',
              callback: action => {
                this.$message({
                  type: 'warning',
                  message: `以了解此信息`
                });
                setTimeout(function(){
                    location.reload();
                },2000);
              },
            });
        },
        open3(index) {
            this.$alert(this.message3[index].info+"。  发送时间:"+this.message3[index].date, this.message3[index].title, {
              confirmButtonText: '了解此风险',
              callback: action => {
                this.$message({
                  type: 'error',
                  message: `此风险较高，注意完成！`
                });
                setTimeout(function(){
                    location.reload();
                },2000);
              }
            });
        }
    }
});