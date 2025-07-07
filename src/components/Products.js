import './Products.css'
import Card from './Card';
import ProductItem from './ProductItem';

function Products(props){
    return (
        <Card className="product">
            <ProductItem 
            title={props.Item[0].title}
            date = {props.Item[0].date}
            amount = {props.Item[0].amount}
            />
            <ProductItem 
            title={props.Item[1].title}
            date = {props.Item[1].date}
            amount = {props.Item[1].amount}
            />
            <ProductItem 
            title={props.Item[2].title}
            date = {props.Item[2].date}
            amount = {props.Item[2].amount}
            />
            <ProductItem 
            title={props.Item[3].title}
            date = {props.Item[3].date}
            amount = {props.Item[3].amount}
            />        
        </Card>
    )
}

export default Products;