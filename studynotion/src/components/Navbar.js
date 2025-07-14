import { Link } from "react-router-dom";
import logo from '../Assets/Logo.svg';
import {toast} from 'react-hot-toast';


function Navbar(props){
    let setIsLoggedIn = props.setIsLoggedIn;
    let isLoggedIn  = props.isLoggedIn;
    return (
        <div className="flex  justify-evenly">
            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
            </Link>
            <nav>
                <ul className="flex gap-3">
                    <li >
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                         <Link to='/'>About</Link>      
                    </li>
                    <li>
                        <Link to='/'>Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex ml-5 gap-3">
                {
                    !isLoggedIn &&
                    <Link to='/login'>
                        <button>Login</button>
                    </Link>
                }
                {   
                    !isLoggedIn &&
                    <Link to='/signup'>
                        <button>Signup</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to='/' onClick={()=>{
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                    }}>
                        <button>Logout</button>
                    </Link>
                }
                {
                    isLoggedIn &&
                    <Link to='/dashboard'>
                        <button>Dashboard</button>
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar;