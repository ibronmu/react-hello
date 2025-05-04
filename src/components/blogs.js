
import { Link } from "react-router-dom";
const BlogList = ({blogs,title}) => {
    
    return ( 

        <div className="blog-header" key={blogs.id}>
            {title}
            
         {
blogs.map((blog)=> (
  <div className="blog-preview" key={blog.id}> 
  <Link to={`/blogs/${blog.id}`}>
  <h2>{blog.title}</h2>
  </Link>

  <p>written by {blog.author} </p>
  <article>{blog.body} </article>
  </div>
))
         } 
        
        </div>
     );
}
 
export default BlogList;