import { useNavigate } from "react-router-dom";


function About(){
    const Navigate = useNavigate()
    function changeHadler(){
        Navigate('/Support');
    }
    return(
        <div>
            About page
            <button onClick={changeHadler}>Move to Support page</button>
        </div>
    );
}

export default About;