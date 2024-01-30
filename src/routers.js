import HomePage from './components/HomePage.vue'

import CreateAnime from './components/CreateAnime.vue'
import ViewAnime from './components/ViewAnime.vue'
import AnimeDetails from './components/AnimeDetails.vue'
import UpdateAnime from './components/UpdateAnime.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : 'HomePage',
        component : HomePage,
        path : '/'
    },
    {
        name : 'CreateAnime',
        component : CreateAnime,
        path : '/create-anime' 
    },
    {
        name: 'ViewAnime',
        component : ViewAnime,
        path : '/view-anime'
    },
    {
        name: 'AnimeDetails',
        path: '/anime/:id',
        component: AnimeDetails,
    },
    {
        name : 'UpdateAnime',
        component : UpdateAnime,
        path : '/update-anime/:id'
    }
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router