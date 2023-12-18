const { useState, useEffect } = require("react");
import { fetchTrendMovies } from "services/api";
import MovieList from "components/MovieList/MovieList";
import  { LoadingIndicator } from '../components/SharedLayout/LoadingDots';




const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                setError(false);
                setIsLoading(true);
                const data = await fetchTrendMovies();
                setTrendingMovies(data.results);               
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTrendingMovies();
    }, []);

    return (
        <>
        {isLoading ? (
            <LoadingIndicator/>
        ) : error ? (
            <p>
                Sorry, we could not fetch the trending movies. Please try again later.
            </p>
        ) : (
            <MovieList trendingMovies={trendingMovies || []} />
        )}
        </>
    );
};

export default Home;