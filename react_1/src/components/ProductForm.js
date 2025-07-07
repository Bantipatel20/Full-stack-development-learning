import { useState } from 'react';
import './ProductForm.css';

function ProductForm(props){
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productdata = {
            title : newTitle,
            date : newDate
        };
        props.saveProduct(productdata);
        setDate('');
        setTitle('');
    }
    return (<form onSubmit={submitHandler}>
        <div>
            <label>title</label>
            <input type = 'text' value={newTitle}onChange ={titleChangeHandler}></input>
        </div>
        <div>
            <label >date</label>
            <input type='date' value={newDate} onChange ={dateChangeHandler} ></input>
        </div>
        <button type='submit'>add new product</button>
    </form>)
}
export default ProductForm;