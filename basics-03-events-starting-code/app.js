const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: ''
        };
    },
    methods: {
        add(number) {
            this.counter = this.counter + number;
        },

        reduce(number) {
            this.counter = this.counter - number;
        },
        
        setName(event){
            this.name = event.target.value;
        },

        setFullName(event, lastName){
            this.name = event.target.value + ' ' + lastName;
        },

        submitForm(){

            alert("Submitted");
        }
    }
});

app.mount('#events');
