export function MoodBoardItem ({ color, image, description}){
    return (
        <div className="mood-board-item" style={{ backgroundColor: color }} >
          <img src={image} className="mood-board-image" alt={description} />
          <h3 className="mood-board-text">{description}</h3>
        </div>)
    
}
      export const MoodBoard = ()=>{
       return <div>
        <h1 className="mood-board-heading">Destination Mood Board</h1>
        <div className="mood-board">
        </div>
        <MoodBoardItem color={color}
                image={image}
                description={description}/>
        <MoodBoardItem color={color}
                image={image}
                description={description}/>
        <MoodBoardItem color={color}
                image={image}
                description={description}/>
        </div>
      }