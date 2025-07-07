import './ProductItem.css';
import Card from './Card';
import Itemdate from './Itemdate';
import { useState } from 'react';

function ProductItem(props){
    const [title,setTitle] = useState(props.title);
    // console.log(title);
    
    function temp(){
        setTitle ("popcorn");
        console.log(title);

    }
    return (
        <Card className='productItem'>
            <Itemdate date = {props.date}/>
            <div className='productitem-description'>
                <h2>{ title}</h2>
            </div>
            <button onClick={temp}>add to cart</button>
        </Card>
      
    )
}

export default ProductItem;