// Import the useEffect hook from React and Card component from react-bootstrap
import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

// Define a functional component named MovieItem that accepts props
function MovieItem(props) {
  // useEffect hook to log the movie data when the myMovie prop changes
  useEffect(() => {
    console.log("Movie Item:", props.myMovie);
  }, [props.myMovie]); // Only run this effect when the myMovie prop changes

  // Return the JSX to be rendered
  return (
    <div>
      {/* Render a Bootstrap Card to display movie details */}
      <Card>
        {/* Header of the card displays the movie title */}
        <Card.Header>{props.myMovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Image of the movie poster */}
            <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
            {/* Footer displays the release year of the movie */}
            <footer>{props.myMovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

// Export the MovieItem component so it can be used in other parts of the application
export default MovieItem;
