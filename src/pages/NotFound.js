import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="page">
    <h1>404 - Page Not Found</h1>
    <p>YO BRO U NEED TO BACK HOME!!!</p>
    <Link to="/">Go Home</Link>
  </div>
);

export default NotFound;
