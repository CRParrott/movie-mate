const api = "http://api.trakt.tv/movies/trending/";
const apiKey = "6946957fb7966ec5f360748c8b87a142609f9067459a4de85e0708f7809ccc2f";
const url = api+apiKey;


export default function trendingMovies() {
    fetch(url).then(result => {
        return result;
    })
};