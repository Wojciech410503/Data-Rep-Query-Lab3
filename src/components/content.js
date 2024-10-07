// Define a functional component named Content
const Content = () => {
    // Return the JSX to be rendered
    return (
        <div>
            {/* Render a main heading with the text "Hello World!" */}
            <h1>Hello World!</h1>
            {/* Render a subheading that displays the current local time */}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

// Export the Content component so it can be used in other parts of the application
export default Content;
