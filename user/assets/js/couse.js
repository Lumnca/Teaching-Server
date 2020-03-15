var _c = new Vue({
    el : '#app',
    data : {
        course : {
          name : '',
          teacher : '',
          level : 0,
          course_numbers : 0
        },
        state : '',
        restaurants: [],
        timeout:  null,
        sourchDisplay : false,
        fit : 'scale-down',
        courses : []
    },
    methods: {
        loadAll() {
          return this.course;
        },
        querySearchAsync(queryString, cb) {
          var restaurants = this.restaurants;
          var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;        
          cb(results);
    
        },
        createStateFilter(queryString) {
          return (state) => {
            return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) == 0);
          };
        },
        handleSelect(item) {
          item.display = true;
        },
        showSourchDisplay(id){
            this.sourchDisplay = true;
            axios.get('http://127.0.0.1:8081/course/'+id)
          .then(function (response) {
            _c.course = response.data;
            _c.course.id = id;
          })
          .catch(function () {
              _c.$message.error("查询课程不存在，或者网络错误！");
              _c.sourchDisplay = false;
          });

        },
        remove(index){
            this.course[index].display = false;
        },
        //课程
        openCourse(course){
            window.localStorage.setItem('courseName',course);
            window.location.href="showCourse.html";
        },
        initRequset(url,id){
          axios.get(url,{
            params : {
              id : id
            }
          })
          .then(function (response) {
            _c.courses = response.data;
          })
          .catch(function () {
              alert("请求失败!");
          });
        },
        addSCourse(c){
          let id = JSON.parse(window.localStorage.getItem("_user")).id;
          axios.post('http://127.0.0.1:8081/asc',{
            uid : id,
            cid : c,
            iden : 'S'
          })
          .then(function (response) {
              if(response.data.code === 200 ){
                _c.$message({
                  message: response.data.message,
                  type: 'success'
                });
              }
              else{
                _c.$message.error('课程已选或者网络错误!');
              }
          })
          .catch(function () {
              //响应失败的操作
              _c.$message.error('课程已选或者网络错误!');
          });
          _c.sourchDisplay = false;
        },
        delMeSC(id){
          axios.post('http://127.0.0.1:8081/dsc',{
            cid : id,
            uid : JSON.parse(window.localStorage.getItem("_user")).id
          })
          .then(function (response) {
              if(response.data.code==200){
                _c.$message({
                  message: response.data.message,
                  type: 'success'
                });
                setTimeout(()=>{
                  window.location.reload();
                },500);
              }
              else{
                _c.$message.error(response.data.message);
              }
          })
          .catch(function () {
              //响应失败的操作
              alert("请求失败!");
          });
        }
      },
      mounted() {
      
        axios.get('http://127.0.0.1:8081/course')
          .then(function (response) {
            _c.restaurants = response.data._embedded.courses;
          })
          .catch(function () {
              //响应失败的操作
              alert("请求失败!");
          });
      }
      
})