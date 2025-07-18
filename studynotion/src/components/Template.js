import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import frame from '../Assets/frame.png';
function Templates({title,desc1,desc2,image,formtype,setIsLoggedIn}){
    return (
        <div>
            <div>
                <h1>{title}</h1>
                <p>
                    <span>{desc1}</span>
                    <span>{desc2}</span>
                </p>
                {
                    formtype==="signup"?(<SignupForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div>
                    <div></div>
                    <div>or</div>
                    <div></div>
                </div>

                
                    <button>
                        <p>Sign in with Google</p>
                    </button>
            </div>
            <div>
                <img src={frame} 
                alt='pattern'
                width={558}
                height={504}
                loading='lazy'/>

                <img src={image} 
                alt='students'
                width={558}
                height={490}
                loading='lazy'/>
            </div>
        </div>
    )
}

export default Templates;