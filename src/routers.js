import HomePage from './components/HomePage.vue'
import DevelopmentPage from './components/DevelopmentPage.vue'


import CreateAnime from './components/CreateAnime.vue'
import ViewAnime from './components/ViewAnime.vue'
import AnimeDetails from './components/AnimeDetails.vue';

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name : 'HomePage',
        component : HomePage,
        path : '/'
    },
    {
        name : 'DevelopmentPage',
        component : DevelopmentPage,
        path : '/development-page'
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
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router