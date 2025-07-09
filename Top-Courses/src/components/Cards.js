import { useState } from 'react';
import Card from './Card';
function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourse,setLikedCourse]=useState([])
    const getCouses = ()=>{
        if(category=== 'All'){
            let allcourse = [];
            Object.values(courses).forEach( (coursecategoty) =>{
                coursecategoty.forEach((course)=>{
                    allcourse.push(course);
                })
            })
        return allcourse;
        }else{
            return courses[category];
        }
        
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {   
                !courses ? (
                    <div>
                        data not found
                    </div>
                ) : (getCouses().map((course)=>{
                    return (<Card course={course} likedCourse={likedCourse} setLikedCourse={setLikedCourse}/>)
                }))
                
            }
        </div>
    );
};

export default Cards; 