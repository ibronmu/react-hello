
import useFetch from '../usefetch';
import BlogList from './blogs';

const Home = () => {
    const  {Data, isLoading, error} = useFetch('http://localhost:8000/blogs');  
    
return (  
        
        <div className="home">
            <h1>Home</h1>
            { error && <div>{error}</div> }
        {isLoading && <div>Loading</div>}
        {Data && <BlogList blogs={Data} title="All blogs" />}
        </div>
    );
}
 
export default Home;