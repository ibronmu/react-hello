const Home = () => {
    const handleClick = ()=>{
        console.log("hii")
    }
    return (  
        <div className="home">
            <h1>Home</h1>
            <button onClick={handleClick}>click me</button>
        </div>
    );
}
 
export default Home;