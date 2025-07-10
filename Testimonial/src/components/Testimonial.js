import { FiChevronLeft, FiChevronRight} from "react-icons/fi";
import Card from './Card';
import { useState } from "react";
function Testimonial(props){
    let reviews = props.reviews;
    let [index,setIndex] = useState(0);
    let n = reviews.length;
    function leftShiftHandler(){
        setIndex((index-1+n)%n);
    }
    function rightShiftHandler(){
        setIndex((index+1)%n);
    }
    function surpriseHandler(){
        let randomIndex = Math.floor(Math.random()*n);
        setIndex(randomIndex)
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 rounded-md">
            <Card review ={reviews[index]}></Card>
            <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto"> 
                <button className="cursor-pointer hover:text-violet-500" onClick={leftShiftHandler}>
                    <FiChevronLeft></FiChevronLeft>
                </button>
                <button className="cursor-pointer hover:text-violet-500" onClick={rightShiftHandler}>
                    <FiChevronRight></FiChevronRight>
                </button>
            </div>
            <div className="mt-6">
                <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg" onClick={surpriseHandler}>
                    Surprise Me
                </button>
            </div>
        </div>
    )
};

export default Testimonial;