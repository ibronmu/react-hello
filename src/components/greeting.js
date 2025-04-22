

export const Greet = ({name,age,level,callName})=>{

  return(
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Hello user</h4>
      <p>good morning {name}!</p>
      <p>your age is {age}!</p>
      <p>your are in {level} level!</p>
      <button onClick={()=> callName(name)}
      >call name</button>
    </div>
)
}
export default Greet;