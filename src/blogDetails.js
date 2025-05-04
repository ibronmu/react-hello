import { useParams } from "react-router-dom";
import useFetch from "./usefetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();
    const {Data:blog,error,isLoading} = useFetch('http://localhost:8000/blogs/'+ id);
    const history = useHistory()
    const handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method:'DELETE'
        }).then(
            ()=>history.push('/')
        )
     
        
    } 
    return (  
        <div className="blog-details">
            {isLoading && <div>Loading...</div> }
            {error && <div>{error}</div> }

            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>wriiten by {blog.author} </p>
                    <div>{blog.body}</div>
                    <button onClick={()=> handleDelete()}>delete</button>
                </article>
            ) }
        </div>
    );
}
 
export default BlogDetails;