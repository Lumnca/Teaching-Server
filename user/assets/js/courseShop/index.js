var app = new Vue({
    el: '#app',
    data: {
        search: '',
        activeName: '1'
    },
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
})