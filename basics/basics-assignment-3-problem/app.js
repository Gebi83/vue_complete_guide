const app = Vue.createApp({
    data() {
        return {
            counter: 0
        }
    },

    watch: {
        calculatedResult() {

            console.log('Watched')
            const that = this;
            setTimeout(function () {
                console.log("Resetting")
                that.counter = 0;
            }, 5000)
        }
    },

    computed: {
        calculatedResult() {


            if (this.counter < 37) {
                return 'Not there yet'
            } else if (this.counter === 37) {
                return this.counter
            } else {
                return 'Too much!'
            }

        }
    },
    methods: {
        add(number) {
            this.counter = this.counter + number;
            console.log(this.counter)
        }
    }
})

app.mount('#assignment')