import Counter from "./components/counter";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import BlogDetails from "./blogDetails";
import Create from "./components/create";
import NotFound from "./notFound";
function App() {
  
  return (
   <Router>

<div className="App">
    <div>
    <Navbar/>
    
    
    <Switch>
    <Route exact path="/" ><Home></Home></Route>
      <Route path="/Counter"><Counter></Counter></Route>
      
      <Route path="/blogs/:id">
         <BlogDetails/>
      </Route>
      <Route path="/create">
<Create/>
  </Route>
  <Route path="*" >
    <NotFound/>
  </Route>
    </Switch>
    </div>  
    
    </div>
   </Router>
   
   
  );
}

export default App;
