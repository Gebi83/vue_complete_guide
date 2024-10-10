const app = Vue.createApp({
    data() {
        return {
            showList :true,
            currentInput: '',
            tasks: []
        };
    },
    methods: {
        addTask() {
            this.tasks.push(this.currentInput);

        },
        
        toggleVisibility(){
            this.showList = !this.showList;
        }
    },
    computed: {
        buttonCaption(){
            return this.showList ? 'Hide List' : 'Show List';
        }
    }
})

app.mount('#assignment')