// Attraverso l'apposita API di Boolean :faccia_che_festeggia:
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            mailsList: [],
        }
    },
    methods: {
        getMails(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((elem)=>{
                    console.log(elem.data.response);
                    this.mailsList.push(elem.data.response)
                })  
            }
            
        }
    }

}).mount('#app')