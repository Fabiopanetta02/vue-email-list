const root = new Vue({
    name: 'email',
    el: '#root',
    data: {
        randomEmail: [],
    },
    methods: {
    },
    mounted(){
        for(let i = 0; i <= 10; i++ ){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                const singleEmail = res.data.response;
                this.randomEmail.push(singleEmail);
                console.log(res.data.response)
            })
        }
    }

}) 