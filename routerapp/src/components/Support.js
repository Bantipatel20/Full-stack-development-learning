 import { useNavigate } from "react-router-dom";
 function Support(){
    const Navigate = useNavigate()
    function changeHadler(){
        Navigate('/');
    }
    return (
        <div>
            Support page
            <button onChange={changeHadler}>move home</button>
        </div>
    );
 }

 export default Support;