import Card from "./Card";
function Tours({tours, removeTour,onlyThisTour}){
    return (
        <div className="container">
            <div>
                <h2 className="title">Plan with World`s</h2>
            </div>
            <div className="cards">
                {
                    tours.map( (tour) => {
                        return <Card {...tour} removeTour={removeTour} onlyThisTour={onlyThisTour}></Card>
                    })
                }
            </div>
        </div>
        
    );
}
export default Tours;