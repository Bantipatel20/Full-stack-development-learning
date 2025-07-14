import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link,useNavigate } from "react-router-dom";
import {toast} from "react-hot-toast";




function LoginForm(props){
    const navigate = useNavigate();
    const [showPassword,setShowSetPassword] =useState(false);
    const [formData,setFormData] = useState({
        email:'',password:""
    })
    function changeHandler(event){
        setFormData(prevdata=>(
           { ...prevdata,
            [event.target.name]:event.target.value
           }
        ))
    }
    function submitHandler(event){
        event.preventDefault();
        props.setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard")
    }
    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>Email Address<sup>*</sup> </p>
                <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email address" name="email"></input>
            </label>
            <label>
                <p>Password<sup>*</sup> </p>
                <input required type={showPassword ? ("text") :("password")} value={formData.password} onChange={changeHandler} placeholder="Enter password" name="password"></input>
                <span onClick={()=>setShowSetPassword((prev) =>!prev)}>{
                    showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                }
                </span>
                <Link to='#'>
                    <p>
                        Forgot Password
                    </p>
                </Link>

                <button >Sign in</button>
            </label>
        </form>
    )
}


export default LoginForm;