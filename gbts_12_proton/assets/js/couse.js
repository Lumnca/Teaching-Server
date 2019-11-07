new Vue({
    el : '#app',
    data : {
        course : [
            {
                name : 'XXX',
                numbers : 59,
                teacher : '张三',
                level : 3.5,
                src : 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                value : '#KL4411',
                display : false
            },
            {
                name : 'XXX',
                numbers : 77,
                teacher : '张三',
                level : 3.8,
                src : 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                value : '#SO8552',
                display : false
            },
            {
              name : 'XXX',
              numbers : 77,
              teacher : '张三',
              level : 3.8,
              src : 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
              value : '#SO8552',
              display : false
          }
        ],
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
  
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            cb(results);
          }, 3000 * Math.random());
        },
        createStateFilter(queryString) {
          return (state) => {
            return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
          };
        },
        handleSelect(item) {
          item.display = true;
          console.log(item);
        },
        showSourchDisplay(){
            this.sourchDisplay = true;
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
        this.restaurants = this.loadAll();
      }
})