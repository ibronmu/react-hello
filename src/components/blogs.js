const BlogList = ({blogs,title,handleDelete}) => {
    
    return ( 
        <div className="blog-header" key={blogs.id}>
            {title}
            {
          blogs.map((blog)=> (
            <div className="blog-preview" key={blog.id}> 
            <h2>{blog.title}</h2>
            <p>written by {blog.author} </p>
            <article>{blog.body} </article>
            <button onClick={()=>handleDelete(blog.id)}>delete blog</button>
            </div>
          ))
        }
        </div>
     );
}
 
export default BlogList;