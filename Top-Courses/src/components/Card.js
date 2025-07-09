
import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import { toast } from 'react-toastify';
function Card(props){
    let course = props.course;
    let likedCourse = props.likedCourse;
    let setLikedCourse = props.setLikedCourse;
    function clickHandler(){
        if(likedCourse.includes(course.id)){
            setLikedCourse ((prev)=>prev.filter((id)=>(id!==course.id)));
            toast.warning("like remove");
        }else{
            if(likedCourse.length === 0){
                likedCourse.push(course.id);
            }else{
                    setLikedCourse((prev)=> [...prev,course.id]);
            }
            toast.success("like successfully");
        }
    }
    return(
        <div className='w-[300px] bg-white bg-opacity-80 rounded-md overflow-hidden'>
            <div className='relative'>
                <img src={course.image.url} alt=""></img>
                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                    {
                        !likedCourse.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>):(<FcLike fontSize="1.75rem"></FcLike>)
                    }
                            
                    </button>
                </div>
                </div>
                <div className='p-4'>
                    <p className='text-black font-semibold text-lg leading-6'>{course.title}</p>
                    <p className='mt-2 text-blue'>{
                        course.description.length > 100 ? (course.description.substr(0,100) + '...') : (course.description)
                    }</p>
                </div>     
        </div>
    );  
};

export default Card;