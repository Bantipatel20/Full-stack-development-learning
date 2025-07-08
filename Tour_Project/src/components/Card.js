import { useState } from "react";


function Card({id,image,info,price,name,removeTour,onlyThisTour}){
    const [readmore,setReadmore] = useState(false)
    let description = readmore ? info : `${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }
    return (
        <div className="card">
            <img src={image} className="image" alt=""></img>
            <div className="tour-info">
            <div className="tour-details">
                 <h4 className="tour-price">₹{price}</h4>
                 <h4 className="tour-name">{name}</h4>
            </div>
           <div className="discription">
                    {description}
                    <span onClick={readmoreHandler} className="read-more">{readmore ? `show less` : `read more`}</span>
           </div>
           </div>
           <button onClick={() => removeTour(id)} className="btn-rd">Not Interested</button>
            <button onClick={() => onlyThisTour(id)} className="btn-rd">Interested</button>
        </div>
    );
}

export default Card;