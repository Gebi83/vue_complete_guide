Vue.createApp({
    data(){
        return {
            name: 'Manuel',
            age: 41,
            imageUrl: 'https://cdn.moviepilot.de/files/573d998de18a61d656a600fb3f7613bf60b71fa6972b5c182678e2125601/fill/1200/576/darkwingduck.jpg',
            numberData: this.randomNumber()
        };
    },
    methods: {
        randomNumber(){
            return Math.random();
        }
    }
})
.mount('#assignment')