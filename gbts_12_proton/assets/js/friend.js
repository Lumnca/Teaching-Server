new Vue({
    el : '#app',
    data : {
        following : [
            {
                name : 'Tom',
                ID : '48515',
                newInfo : '2019/9/21',
                img : '../assets/img/avatar4.jpg'
            },
            {
                name : 'Marry',
                ID : '74449',
                newInfo : '2019/9/20',
                img : '../assets/img/avatar3.jpg'
            }
        ],
        followers : [
            {
                name : 'Bob',
                ID : '74426',
                newInfo : '2019/7/11',
                img : '../assets/img/avatar2.jpg'
            },
            {
                name : 'Key',
                ID : '96931',
                newInfo : '2019/9/27',
                img : '../assets/img/avatar5.jpg'
            }
        ],
        dynamic : [
            {
                name : 'Key',
                img : '../assets/img/avatar5.jpg',
                date : '2019/9/27',
                info : 'On another level, many in the medical community acknowledge that the ssisted--suicide debate has been fueled in part by the despair of patients for whom noderm medicine has prolonged the physical agony of dying.…'
            }
        ],
        drawer : false,
        direction  : 'rtl',
        lookUpUser :   {
            name : 'Marry',
            ID : '74449',
            newInfo : '2019/9/20',
            img : '../assets/img/avatar3.jpg'
        }
    },
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
        }
    }
})


