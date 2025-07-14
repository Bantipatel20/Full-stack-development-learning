import Templates from "../components/Template";
import login from '../Assets/login.png';


function Login({setIsLoggedIn}){
    return(
        <Templates
            title="WelCome Back"
            desc1 = "Build skill for today, tomorrow, and beyond"
            desc2="Education to future-proof your career"
            image = {login}
            formtype = "login"
            setIsLoggedIn = {setIsLoggedIn}
        />
    );
}

export default Login;