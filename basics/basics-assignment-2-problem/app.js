const app = Vue.createApp({
    data(){
        return {
            completedText: '',
            writingText: ''
        }
    },
    methods: {
        showAlert(){
            alert("OMG! Button pressed!");
        },
        
        writeText(event){
          this.writingText = event.target.value  
        },
        
        completeText(event) {
            this.completedText = event.target.value
        }
    }
});

app.mount('#assignment')