const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: '',
            lastName: '',
            // fullName: ''
        };
    },

    watch: {
        
        counter(value){
            
            if(value > 50){
                this.counter = 0;
            }
        }

        // name(value) {
        //     if (value === '') {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = value + ' ' + this.lastName;
        //
        //     }
        // },
        //
        // lastName(value) {
        //     if (value === '') {
        //         this.fullName = '';
        //     } else {
        //         this.fullName = this.name + ' ' + value;
        //
        //     }
        // }
    },

    computed: {
        fullName(){

            console.log("Running again")
            if(this.name === '' || this.lastName === ''){
                return '';
            }

            return this.name + ' ' + this.lastName 
        }  
    },

    methods: {
        add(number) {
            this.counter = this.counter + number;
        },

        reduce(number) {
            this.counter = this.counter - number;
        },

        outputFullName() {
            console.log("Running again")

            return this.name + ' ' + 'Gebert'
        },

        setName(event) {
            this.name = event.target.value;
        },

        setFullName(event, lastName) {
            // this.name = event.target.value + ' ' + lastName;
            this.name = event.target.value;
        },

        submitForm() {

            alert("Submitted");
        },

        resetInput() {

            this.name = '';
        }
    }
});

app.mount('#events');
