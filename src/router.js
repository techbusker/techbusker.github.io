import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Contact from './components/Contact.vue'
import Profile from './components/Profile.vue'
import Skills from './components/Skills.vue'
import Work from './components/Work.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'index',
            component: Index
        },
        // {
        //     path: '/contact',
        //     name: 'contact',
        //     component: Contact
        // },
        {
            path: '/profile',
            name: 'profile',
            component: Profile
        },
        {
            path: '/skills',
            name: 'skills',
            component: Skills
        },
        // {
        //     path: '/work',
        //     name: 'work',
        //     component: Work
        // },
    ]
})