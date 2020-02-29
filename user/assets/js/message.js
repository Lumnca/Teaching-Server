/*
*
*用户信息
*
*/

var message = [
    {
        name : '李华',
        date : '2019/8/12 12:23',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Hello ,Im Li Hua ，Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        files : [
            {
                title : 'new.png',
                format : 'PNG',
                size : '144KB',
                style : 'label-danger',
                path : '../assets/img/avatar.jpg'
            },
            {
                title : 'new.jpg',
                format : 'PNG',
                size : '164KB',
                style : 'label-primary',
                path : '../assets/img/avatar.jpg'
            }
        ],
        type: 'fa-star-o'
    },
    {
        name : '李华',
        date : '2019/8/11 06:07',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        type: 'fa-star-o'
    },
    {
        name : '李华',
        date : '2019/8/10 22:45',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        type: 'fa-star-o'
    },
    {
        name : '李华',
        date : '2019/8/9 15:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        type: 'fa-bookmark-o'
    },
    {
        name : '李华',
        date : '2019/8/8 14:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        type: 'fa-bookmark-o'
    }, 
    {
        name : '李华',
        date : '2019/8/4 14:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : true,
        type: 'fa-bookmark-o'
    }, 
]
/*
*
*垃圾
*
*/





var trashInfor = [
    {
        name : '允浩',
        date : '2019/7/12 12:23',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Hello ,Im Li Hua ，Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : false,
        files : [
            {
                title : 'new.png',
                format : 'PNG',
                size : '144KB',
                style : 'label-danger',
                path : '../assets/img/avatar.jpg'
            },
            {
                title : 'new.jpg',
                format : 'PNG',
                size : '164KB',
                style : 'label-primary',
                path : '../assets/img/avatar.jpg'
            }
        ],
        type: 'fa-trash-o'
    },
    {
        name : '小明',
        date : '2019/8/7 14:03',
        icon : ' fa-paper-clip',
        title : '关于系统使用问题',
        info : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.....  ',
        flag : true,
        isRead : true,
        type: 'fa-trash-o'
    }, 
]


/*
*
*草案
*
*/

var reInbox = [
    {
        to : 'Tom',
        title : '主题',
        info : '在此添加文本',
        fontStyle : '',
        textAlign : 'left',
        fontWeight : '',
        textLine : '',       
    },
    {
        to : 'Build',
        title : '主题',
        info : '在此添加文本',
        fontStyle : '',
        textAlign : 'left',
        fontWeight : '',
        textLine : ''
    }
]

new Vue({
    el : '#app',
    data : {
        inbox : [
            {
                title : '收件箱',
                href : 'inbox.html',
                label : 'label-danger',
                number : 0
            },
            {
                title : '发送邮件',
                href : 'compose.html',
                label : 'label-info',
                number : 4
            },
            {
                title : '垃圾箱',
                href : 'trash.html',
                label : 'label-default',
                number : 1
            },
            {
                title : '草案',
                href : 'reInbox.html',
                label : 'label-warning',
                number : 2
            },
        ],
        button : [
            {
                icon : ' fa-envelope',
                style : ' btn-default'
            },
            {
                icon : 'fa-star',
                style : 'btn-default'
            },
            {
                icon : 'fa-bookmark-o',
                style : 'btn-default'
            },
            {
                icon : 'fa-trash-o',
                style : 'btn-default'
            },
            {
                icon : 'fa-refresh',
                style : 'btn-default'
            }
        ],
        message : message,
        trashMessafe : trashInfor,
        reInbox : reInbox,
        start : 1,
        end : 5,
        pageLength : 5,
        compose : {
            to : '接收者',
            title : '主题',
            info : '在此添加文本',
            fontStyle : '',
            textAlign : 'left',
            fontWeight : '',
            textLine : ''
        },
        fileList: []
    },
    created : function(){
            var number = 0;
            for(var i=0;i<message.length;i++){
                if(message[i].isRead===false){
                    number++;
                }
            }
            this.inbox[0].number = number;
    },
    methods : {
        fullbackPage : function(){
            if(this.start > 1){
                this.start -= this.pageLength;
                this.end   = this.start + this.pageLength-1;
                if(this.start  <= 0){
                    this.start = 1;
                }
            }
        },
        forwardPage : function(){
            if(this.end < this.message.length){
                this.start += this.pageLength;
                this.end   = this.start + this.pageLength-1;        
                if(this.end>this.message.length){
                    this.end = this.message.length;
                }       
            }
        },
        minus : function(){
            if(this.pageLength>1){
                this.pageLength--;
            }
        },
        plus : function(){
            if(this.pageLength<10){
                this.pageLength++;
            }
        },
        isBolder : function(){
            if(this.compose.fontWeight === ''){
                this.compose.fontWeight = 'bolder';
            }
            else{
                this.compose.fontWeight = '';
            }
        },
        fontStyle : function(){
            if( this.compose.fontStyle === ''){
                this.compose.fontStyle =  'italic';
            }
            else{
                this.compose.fontStyle = '';
            }   
        },
        textLine : function(){
            if(this.compose.textLine === ''){
                this.compose.textLine = 'underline';
            }
            else{
                this.compose.textLine = '';
            }
           
        },
        remove : function(){
            document.getElementById('message').value = '';
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
         handlePreview(file) {
            console.log(file);
        },
        isRead(index){
            if(!message[index].isRead){
                this.inbox[0].number--;
                message[index].isRead = true;
            }

        },
        showChose(index){
            if(index===0){
                message.forEach(element => {
                    element.flag = true
                });
            }
            else if(index===1){
                message.forEach(element => {
                    if(element.type!=='fa-star-o'){
                        element.flag = false;
                    }
                    else{
                        element.flag = true
                    }
                });     
            }
            else if(index===2){
                message.forEach(element => {
                    if(element.type!=='fa-bookmark-o'){
                        element.flag = false;
                    }
                    else{
                        element.flag = true
                    }
                });
            }
            else if(index===3){

            }
            else{
                location.reload();
            }
        }
    }
})