import HomePage from './components/HomePage.vue'
import AnimeList from './components/AnimeList.vue'
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
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router