import { useState } from "react";
import { useHistory } from "react-router-dom";
 const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setauthor] = useState('yoshi')
   const [isLoading,setIsloading] = useState(false)
   const history = useHistory()
const handleSubmit =  (e)=>{
e.preventDefault()
setIsloading(true)
const blog = {title, author, body}
fetch('http://localhost:8000/blogs',{
    method:'POST',
    headers:{'Content-type':"applicatio/jason"},
    body: JSON.stringify(blog)
}).then(()=>{
    console.log('blog added')
    setIsloading(false)
    //history.go(-1)
    history.push('/')
})
}

    return ( 
        <div className="create">
            <h1>create a new blog</h1>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label >blog title:</label>
                    <input type="text" 
                    required
                    value={title}
                    onChange={ (e)=> {
                       return setTitle(e.target.value)
                        
                    } }
                    />
                    <label >blog body:</label>
                    <textarea 
                    value={body}
                    onChange={(e)=> setBody(e.target.value)}
                    required></textarea>
                    <label >blog author: </label>
                    <select 
                    value={author}
                    onChange={(e)=> setauthor(e.target.value)}
                    required
                    >
                         <option value="yoshi">yoshi</option>
                         <option value="mario">mario</option>
                    </select>
                    {!isLoading && <button>add blog</button>}
                    {isLoading && <button disabled>adding blog...</button>}
                </form>
            </div>
        </div>
     );
 }
  
 export default Create;