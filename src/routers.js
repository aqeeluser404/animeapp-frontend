import HomePage from './components/HomePage.vue'
import AnimeList from './components/AnimeList.vue'
import DevelopmentPage from './components/DevelopmentPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : 'HomePage',
        component : HomePage,
        path : '/'
    },
    {
        name : 'AnimeList',
        component : AnimeList,
        path : '/anime-list'
    },
    {
        name : 'DevelopmentPage',
        component : DevelopmentPage,
        path : '/development-page'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router