/*
*
*  用户数据
*
*/


var Main = new Vue({
    el: '#app',
    data: {
        id: 'xx',
        name: 'Lumnca',
        address: '四川省成都市',
        followers: 127455111,
        following: 24,
        posts: 57,         //推送
        active: true,       //动态
        dialogImageUrl: '', //头像
        dialogVisible: false,
        pushMessage: false,
        user: {
            id: '',
            name: '',
            address: '',
            age: 0,
            birthday: '1970/01/01',
            tel: '0',
            email: 'null',
            flag: false,
            flag2: true
        }
    },
    methods: {
        handleRemove: function (file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview: function (file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        }
    },
    mounted() {
        //初始化请求用户的数据
        axios.get('', {
            //参数
            params: {
                id : 'TA123456'
            }
        })
            .then(function (response) {
                //响应成功的操作response.data是返回的JSON数据（无需转换）
                console.log(response.data);
                //数据类型如下
                Main.user = response.data = {
                    id: 'TA123456',
                    name: 'Lumnca',
                    address: '达州',
                    age: 21,
                    birthday: '1998/03/11',
                    tel: '13281101201',
                    email: 'lumnca@163.com',
                    flag: false,
                    flag2: true
                }
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