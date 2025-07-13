import { useNavigate } from "react-router-dom";


function Lab(){
    const Navigate = useNavigate()
    function changeHandler(){
        Navigate("/about")
    }
    function backHandler(){
        Navigate(-1);
    }
    return(
        <div>
            lab page
            <button onClick={changeHandler}>Move to about</button>
            <button onClick={backHandler}>go back</button>
        </div>
    );
}

export default Lab;