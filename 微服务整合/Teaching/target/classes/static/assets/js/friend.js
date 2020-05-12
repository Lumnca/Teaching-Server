new Vue({
    el : '#app',
    data : {
        following : [
            {
                name : 'Tom',
                ID : '48515',
                newInfo : '2019/9/21',
                img : '../assets/img/avatar4.jpg',
                active : [
                    {
                        date : '2019/5/26 14:22',
                        info : 'Hello This my active Info 2  HA Ha Ha HA HA HA ha ha ha ha ha AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                    },
                    {
                        date : '2019/5/21 14:22',
                        info : 'Hello This my active Info 1'
                    }
                ]
            },
            {
                name : 'Marry',
                ID : '74449',
                newInfo : '2019/9/20',
                img : '../assets/img/avatar3.jpg',
                active : [
                    {
                        date : '2019/7/26 14:22',
                        info : 'Hello This my active Info 2'
                    },
                    {
                        date : '2019/6/12 14:22',
                        info : 'Hello This my active Info 1'
                    }                        
                ],
                active : [
                    {
                        date : '2019/5/26 14:22',
                        info : 'Hello This my active Info 2  HA Ha Ha HA HA HA ha ha ha ha ha AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                    },
                    {
                        date : '2019/5/21 14:22',
                        info : 'Hello This my active Info 1'
                    }
                ]
            }
        ],
        followers : [
            {
                name : 'Bob',
                ID : '74426',
                newInfo : '2019/7/11',
                img : '../assets/img/avatar2.jpg',
                active : [
                    {
                        date : '2019/5/26 14:22',
                        info : 'Hello This my active Info 2  HA Ha Ha HA HA HA ha ha ha ha ha AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                    },
                    {
                        date : '2019/5/21 14:22',
                        info : 'Hello This my active Info 1'
                    }
                ]
            },
            {
                name : 'Key',
                ID : '96931',
                newInfo : '2019/9/27',
                img : '../assets/img/avatar5.jpg',
                active : [
                    {
                        date : '2019/5/26 14:22',
                        info : 'Hello This my active Info 2  HA Ha Ha HA HA HA ha ha ha ha ha AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
                    },
                    {
                        date : '2019/5/21 14:22',
                        info : 'Hello This my active Info 1'
                    }
                ]
            }
        ],
        dynamic : [

        ],
        drawer : false,
        direction  : 'rtl',
        lookUpUser :   {
            name : 'Marry',
            ID : '74449',
            newInfo : '2019/9/20',
            img : '../assets/img/avatar3.jpg'
        },
    },
    mounted : function(){
        this.followers.forEach(element => {
            this.dynamic.push(element);
        });
        this.following.forEach(element => {
            this.dynamic.push(element);
        });
    }
    ,
    methods: {
        errorHandler() {
          return true
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            }).catch(_ => {});
        },
        choseFollowing(index){
            this.lookUpUser = this.following[index];
            this.drawer = true;
            console.log(this.lookUpUser);
        },
        choseFollowers(index){
            this.lookUpUser = this.followers[index];
            this.drawer = true;
            console.log(this.lookUpUser);
        },
        addActive(){

        }
    }
})


