var app = new Vue({
    el: '#app',
    data: {
        search: '',
        activeName: 'style',
        course : [
            {
                type : 'style',
                name : '教育'
            },
            { type : 'shenghuo', name : '生活'},  { type : 'keji', name : '科技'},  { type : 'wenxue', name : '文学'},
            { type : 'ligong', name : '理工'},  { type : 'xinli', name : '心理'},  { type : 'jishu', name : '技术'},
        ]
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
})