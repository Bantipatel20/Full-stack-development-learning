

function counter(props){
    const temp1 = "dhaval";
    function parent(valuetemp1){
        console.log("child class");
        props.child(valuetemp1);
    }
    function increment(){
        props.setcount(props.count+1);
    }
    function decrement(){
        props.setcount(props.count-1);
    }
    function reset(){
        console.log(props.count)
        props.setcount(0);
    }
    function double(){
        props.setcount(props.count*2);
    }
    return(
        <div>
            <h1>count :: {props.count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={double}>Double</button>
            <button onClick={()=>parent(temp1)}>parent</button>
        </div>
    )
}

export default counter;