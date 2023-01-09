const app = Vue.createApp({
    data(){
        return {
            message: "Ciao Mondo!!" ,
            pic: "https://api.lorem.space/image/movie?w=150&amp;amp;amp;amp;h=220"
        }
    }
})

app.mount("#root")