// Import the MovieItem component from the movieItem file
import MovieItem from "./movieItem";

// Define a functional component named Movies that accepts props
const Movies = (props) => {
    // Map through the array of movies passed via props and return a list of MovieItem components
    return props.myMovies.map((movie) => {
        // For each movie, render a MovieItem component, passing the movie object as a prop
        return <MovieItem myMovie={movie} key={movie.Title} />;
    });
}

// Export the Movies component so it can be used in other parts of the application
export default Movies;
