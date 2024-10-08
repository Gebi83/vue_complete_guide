const app = Vue.createApp({
    data() {
        return {
            className: '',
            visible: true,
            userStyle: ''
        };
    },
    computed: {
        calculatedClass() {
            if (this.className === 'user1') {
                return {user1: true, visible: this.visible, hidden: !this.visible};
            } else if (this.className === 'user2') {
                return {user2: true, visible: this.visible, hidden: !this.visible};
            } else {
                return {visible: this.visible, hidden: !this.visible}
            }
        }
    },
    methods: {
        toggleVisible() {
            this.visible = !this.visible;
        }
    }
})

app.mount('#assignment')