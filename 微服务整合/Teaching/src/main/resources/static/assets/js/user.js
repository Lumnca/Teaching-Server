/*
*
*  用户数据
*
*/

var host = "http://127.0.0.1:8081";
var Main = new Vue({
    el: '#app',
    data: {
        id: 'xx',
        name: 'Lumnca',
        address: '四川省成都市',
        followers: 0,
        following: 0,
        posts: 0,         //推送
        active: true,       //动态
        dialogImageUrl: '', //头像
        dialogVisible: false,
        pushMessage: false,
        imageUrl: '',
        user: {
            id: '',
            name: '',
            address: '',
            age: 0,
            birthday: '1970-01-01',
            tel: '0',
            email: 'null',
            imgurl : '',
            state : 0
        }
    },
    methods: {
        updateInfo() {
            
            //this.user 等价于Main.user是一个提交的JSON对象
            //初始化请求用户的数据POST方法！
            axios.put(host+ '/user_info/'+ Main.user.id, Main.user)
                .then(function (response) {
                    Main.$message({
                        message:'修改成功！',
                        type: 'success'
                    });
                })
                .catch(function () {
                    //响应失败的操作
                    Main.$message.error('请求失败！');
                });
        },
        handleAvatarSuccess(res, file) {
            this.user.imgurl = file.name;
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    },
    mounted() {
        let id = JSON.parse(window.localStorage.getItem('_user')).id;
        //初始化请求用户的数据
        axios.get(host + '/user_info/'+id)
            .then(function (response) {
                //响应成功的操作response.data是返回的JSON数据（无需转换）
                //数据类型如下
                Main.user = response.data;
                Main.user.id = id;
                Main.name = response.data.name;
                Main.address =  response.data.address;
            })
            .catch(function () {
                //响应失败的操作
                alert("请求失败!");
            });
    },
})
/*
*
*
*
*
*/
