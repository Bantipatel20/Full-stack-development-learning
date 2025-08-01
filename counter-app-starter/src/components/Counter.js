import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "../redux/Slices/CounterSlice";



function Counter(){
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch();
    return(
        <div>
        <button onClick={()=> dispatch(increment())}>
            Increment
        </button>
        <br/>
        <br/>
        <div>{count}</div>
        <br/>
        <br/>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default Counter;