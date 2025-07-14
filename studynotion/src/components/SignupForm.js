import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-hot-toast'

function SignupForm(props){
    const navigate = useNavigate();
    const [formData,setFormData] = useState({
        firstname:'',lastname:'',email:'',password:"",confirmpassword:""
    })
    const [showPassword,setShowSetPassword] = useState(false)
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
        toast.success("Account Created ");
        navigate("/dashboard")
    }
    return (
        <div>
             <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input 
                    type="text"
                    required
                    name="firstname"
                    value={FormData.firstname}
                    placeholder="Enter First Name"
                    onChange={changeHandler}
                    >
                    </input>
                </label>
                 <label>
                    <p>Last Name<sup>*</sup></p>
                    <input 
                    type="text"
                    required
                    name="lastname"
                    value={FormData.lastname}
                    placeholder="Enter Last Name"
                    onChange={changeHandler}
                    >
                    </input>
                </label>
            </div>
                
            <label>
                 <p>Email Address<sup>*</sup> </p>
                        <input required type="email" value={formData.email} onChange={changeHandler} placeholder="Enter email address" name="email"></input>
            </label>
            <div>   
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input 
                    type={showPassword ? "text" : "password"}
                    required
                    name="password"
                    value={FormData.password}
                    placeholder="Enter Password Name"
                    onChange={changeHandler}
                    >
                    </input>
                    <span onClick={()=>setShowSetPassword((prev) =>!prev)}>{
                                        showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                                    }
                    </span>
                </label>

                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input 
                    type={showPassword ? "text" : "password"}
                    required
                    name="confirmpassword"
                    value={FormData.confirmpassword}
                    placeholder="Enter Confirm Password Name"
                    onChange={changeHandler}
                    >
                    </input>
                    <span onClick={()=>setShowSetPassword((prev) =>!prev)}>{
                                        showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)
                                    }
                    </span>
                </label>
            </div>
            <button>
                Create Account
            </button>
                
            </form>
        </div>
    )
}

export default SignupForm;