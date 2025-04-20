
export const Greet = ({name,age,level})=>{

return(
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Hello user</h4>
      <p>good morning {name}!</p>
      <p>your age is {age}!</p>
      <p>your are in {level} level!</p>
    </div>
)
}
export default Greet;