import { Fetch, fetch } from 'react-request';


// const api = "https://api.trakt.tv/movies/trending/";
// const apiKey = "6946957fb7966ec5f360748c8b87a142609f9067459a4de85e0708f7809ccc2f";
// const url = api+apiKey;


export default function trendingMovies() {
    return (
        <Fetch
        url= "https://api.trakt.tv/movies/trending"
        method= "GET"
        headers= {{
            'Content-Type': 'application/json',
            'trakt-api-version': '2',
            'trakt-api-key': '6946957fb7966ec5f360748c8b87a142609f9067459a4de85e0708f7809ccc2f',
        }}>
            {({ fetching, failed, data}) => {
                if (fetching) {
                    return <div>Loading data...</div>;
                }

                if (failed) {
                    return <div>The request did not succeed.</div>;
                }

                if (data) {
                    return (
                        <div className="container-fluid text-center">
                            <div className="options d-flex flex-md-row flex-wrap justify-content-center">
                            </div>
                        </div>
                    )
                }

                return null;
            }}
        </Fetch>
    );
};

