import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>ooch</h2>
            <h1>Not web page </h1>
            <Link to='/'> back to home page</Link>
        </div>
     );
}
 
export default NotFound;