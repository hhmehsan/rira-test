const vm = Vue.createApp({
    data(){
        return{
            counter:0 ,
        }
    },
    methods:{
        increaseCounter(){
            this.counter++ 
        }
    }
}).mount('#app')