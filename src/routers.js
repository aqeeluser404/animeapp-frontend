import HomePage from './components/HomePage.vue'
import AnimeList from './components/AnimeList.vue'
import DevelopmentPage from './components/DevelopmentPage.vue'
import CreateAnime from './components/CreateAnime.vue'
import ReadAnime from './components/ReadAnime.vue'
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
    },
    {
        name : 'CreateAnime',
        component : CreateAnime,
        path : '/create-anime' 
    },
    {
        name: 'ReadAnime',
        component : ReadAnime,
        path : '/read-anime'
    },
    {
        path: '/read-anime/:id',
        name: 'ReadAnimeWithModal',
        component: ReadAnime,
        props: (route) => ({ showModal: route.query.showModal }),
      },
];

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router