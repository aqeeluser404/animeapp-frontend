<template>
    <div class="container">
        <div class="form-container">
            <form @submit.prevent="createAnime" class="anime-form">
                <h1>Create Anime</h1>
                <hr>
                <div class="form-group">
                    <label for="title">Title: </label>
                    <input id="title" v-model="animeData.title" required type="text">
                </div>
                <div class="form-group">
                    <label for="genre">Genre: </label>
                    <input id="genre" v-model="animeData.genre" required type="text">
                </div>
                <div class="form-group">
                    <label for="status">Status: </label>
                    <input id="status" v-model="animeData.status" required type="text">
                </div>
                <div class="form-group">
                    <label for="rating">Rating: </label>
                    <input id="rating" v-model="animeData.rating" required type="text">
                </div>
                <div class="form-group">
                    <label for="episodeCount">Episode count: </label>
                    <input id="episodeCount" v-model="animeData.episodeCount" required type="text">
                </div>
                <hr>
                <div class="button-row">
                    <button class="button" type="submit">Create Anime</button>
                    <button class="button" @click="GoBack">Back</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import AnimeService from '@/services/AnimeService';
    export default {
        name: 'CreateAnime',

        data() {
            return {
                animeData: {
                    title: '',
                    genre: '',
                    episodeCount: '',
                    status: '',
                    rating: ''
                }
            }
        },

        methods: {
            createAnime() {
                AnimeService.createAnime(this.animeData)
                
                .then(response => {
                    console.log('Created Anime:', response.data);
                    this.$router.push('/')
                })
                .catch(error => {
                    console.error('Error creating anime:', error);
                })
            },
            GoBack() {
                this.$router.push('/view-anime')
            }
        },

    }
</script>

<style scoped>
    /* form styling */
    .anime-form {
        max-width: 400px;
        margin: 0 auto;
    }
    .form-container {
        text-align: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .form-group {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        
    }
</style>