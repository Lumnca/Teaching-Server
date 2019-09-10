//-------------------------------服务信息加载脚本---------------------------------------






/*
*功能展示模板信息
*
*
*/
var a = [
    {
        "title" : "标题1",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide"
    },
    {
        "title" : "标题2",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide2"
    },
    {
        "title" : "标题3",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide3"
    },
    {
        "title" : "标题4",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide3"
    },
    {
        "title" : "标题5",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide3"
    },
    {
        "title" : "标题6",
        "info" : "添加信息内容（不超过200字）",
        "style" : "slide3"
    }
]
   
new Vue({
    el: '#app1',
    data: {
        functions : a
    }
})

/*
*
* 进度条数据
*
*/

new Vue({
    el: '#app2',
    data: {
        title :  '标题文本（不超过20字）',
        info : '段落文本（不超过200字）',

        progress : [
            {
                title : '标题1',
                width : 25,
                color : ''
            },
            {
                title : '标题2',
                width : 45,
                color : 'bg-success'
            },
            {
                title : '标题3',
                width : 75,
                color : 'bg-info'
            },
            {
                title : '标题4',
                width : 55,
                color : 'bg-warning'
            },
            {
                title : '标题5',
                width : 36,
                color : 'bg-danger'
            }
        ]
    }
})