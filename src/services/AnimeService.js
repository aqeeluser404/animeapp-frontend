import axios from 'axios';

const ANIME_API_BASE_URL = 'http://localhost:8080/api/anime';

class AnimeService {
    getAnimeList() {
        return axios.get(`${ANIME_API_BASE_URL}/all`)
            .then(response => {
                console.log('Anime List:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error fetching anime list:', error);
                throw error;
            });
    }

    getAnimeById(animeId) {
        return axios.get(`${ANIME_API_BASE_URL}/${animeId}`)
            .then(response => {
                console.log('Anime by ID:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error fetching anime by ID:', error);
                throw error;
            });
    }

    createAnime(animeData) {
        return axios.post(`${ANIME_API_BASE_URL}/create`, animeData)
            .then(response => {
                console.log('Created Anime:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error creating anime:', error);
                throw error;
            });
    }

    updateAnime(animeId, animeData) {
        return axios.put(`${ANIME_API_BASE_URL}/update/${animeId}`, animeData)
            .then(response => {
                console.log('Updated Anime:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error updating anime:', error);
                throw error;
            });
    }

    deleteAnime(animeId) {
        return axios.delete(`${ANIME_API_BASE_URL}/delete/${animeId}`)
            .then(response => {
                console.log('Deleted Anime:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error deleting anime:', error);
                throw error;
            });
    }
}

export default new AnimeService();