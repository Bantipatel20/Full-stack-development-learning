import './NewProduct.css'
import ProductForm from './ProductForm'
function NewProduct(props){
    function InTheNewProduct(product){
        console.log("i am inside a new product js");
        props.getObj(product);
    }
    return (
     <div>
        <ProductForm saveProduct = {InTheNewProduct}/>
     </div>   
    )
}

export default NewProduct;