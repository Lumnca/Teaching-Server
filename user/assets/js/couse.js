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
        fit : 'scale-down'
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
            console.log(state.name.toLowerCase().indexOf(queryString.toLowerCase()));
            return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) == 0);
          };
        },
        handleSelect(item) {
          item.display = true;
          
          console.log(item);
        },
        showSourchDisplay(id){
            this.sourchDisplay = true;
            axios.get('http://127.0.0.1:8081/course/'+id)
          .then(function (response) {
            _c.course = response.data;
             console.log(response.data);
          })
          .catch(function () {
              //响应失败的操作
              alert("请求失败!");
          });
            console.log(this.sourchDisplay);
        },
        remove(index){
            this.course[index].display = false;
        },
        //课程
        openCourse(course){
            window.localStorage.setItem('courseName',course);
            window.location.href="showCourse.html";
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