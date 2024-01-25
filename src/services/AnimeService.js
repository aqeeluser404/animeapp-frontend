import axios from 'axios';

const ANIME_API_BASE_URL = 'http://localhost:8080/api/anime/all';

class AnimeService {
    getAnimeList() {
        return axios.get(ANIME_API_BASE_URL)
            .then(response => {
                console.log('Response:', response.data);
                return response;
            })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    }
}

export default new AnimeService();