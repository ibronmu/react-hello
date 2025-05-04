import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div className="content-nav">
            <h1 className="brand"> urbancoll</h1>
            <nav className="Navbar">
            
           <Link to="/">home</Link>
           <Link to="/Counter">counter</Link>
           <Link to="/create">Create</Link>
           <Link to=""></Link>
           </nav>
        </div>
        
     );
}
 
export default Navbar;