
import signup from '../Assets/signup.png';
import Templates from '../components/Template';

function Signup({setIsLoggedIn}){
    return ( 
        <Templates
        title="Join the millions learning to code with StudyNotion for free"
        desc1 ="Build skill for today, tomorrow, and beyond"
        desc2="Education to future-proof your career"
        image = {signup}
        formtype = "signup"
        setIsLoggedIn = {setIsLoggedIn}

        ></Templates>
    );
}


export default Signup;