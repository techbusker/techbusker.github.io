import Vue from 'vue'
import App from './App.vue'
import router from './router'

// require('./sass/abstracts/_variables.scss')



new Vue({
    el: '#app',
    router,
    render: h => h(App)
})