/**
 * 
 * 
 * 课程左侧公告信息栏
 * 
 */
var course = {

    infoList : [
        {
            icon : 'el-icon-bell',
            title : '公告',
            children : [
                {
                   title:  '课程介绍',
                   href :  'courseNotice.html'
                }
            ],
        },
        {
            icon : 'el-icon-reading',
            title : '课件',
            children : [
                {
                   title:  '课件',
                   href :  'courseware.html'
                }
            ],
        },
        {
            icon : 'el-icon-edit',
            title : '测试与作业',
            children : [
                {
                   title:  '作业',
                   href :  ''
                },
                {
                    title:  '测试',
                    href :  ''
                 }
            ],
        },
        {
            icon : 'el-icon-eleme',
            title : '考试',
            children : [
                {
                   title:  '考试',
                   href :  'courseNotice.html'
                }
            ],
        },
        {
            icon : 'el-icon-chat-dot-square',
            title : '讨论区',
            children : [
                {
                   title:  '讨论区',
                   href :  ''
                }
            ],
        },
        {
            icon : 'el-icon-medal',
            title : '评价',
            children : [
                {
                   title:  '评价',
                   href :  ''
                }
            ],
        },
    ],
    courseOutline : [
        {
            name : '第一单元',
            isComplete : false,
            children : [
                {
                    name : '第一节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第二节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第三节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第四节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                }
            ]
        },
        {
            name : '第二单元',
            isComplete : false,
            children : [
                {
                    name : '第一节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第二节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第三节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第四节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                }
            ]
        },
        {
            name : '第三单元',
            isComplete : false,
            children : [
                {
                    name : '第一节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第二节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第三节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第四节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                }
            ]
        },
        {
            name : '第四单元',
            isComplete : false,
            children : [
                {
                    name : '第一节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第二节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第三节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第四节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                }
            ]
        },
        {
            name : '第五单元',
            isComplete : false,
            children : [
                {
                    name : '第一节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第二节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第三节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                },
                {
                    name : '第四节',
                    isComplete : false,
                    link : {
                        video : '',
                        txt : '',
                        pdf : '',
                        word : ''
                    }
                }
            ]
        }
    ]
}


var userOptions = {
    order : [
        {
            title : '查看进度',
            icon : 'el-icon-collection',
            href : '#'
        },
        {
            title : '课内消息',
            icon : 'el-icon-chat-dot-round',
            href : '#'
        },
        {
            title : '退出课堂',
            icon : 'el-icon-back',
            href : 'lookUpCourse.html'           
        }
    ]
}

var app = new Vue({
    el: '#app',
    data : {
        user : '刘麻子',
        course : course,
        userOptions : userOptions,
        name : window.localStorage.getItem('courseName')
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
});