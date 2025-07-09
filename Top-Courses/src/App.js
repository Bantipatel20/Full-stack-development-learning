import "./App.css";
import { apiUrl,filterData } from "./data";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Filter from './components/Filter';
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import {toast} from 'react-toastify'
function App() {
  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)
  useEffect(()=>{
     const  fetchData = async ()=>{
      setLoading(true);
      try{
          const respons = await fetch(apiUrl);
          const output = await respons.json();
          setCourses(output.data)
      }
      catch(err){
        toast.error("something went wrong");
      }
      setLoading(false)  
     }
     fetchData()
  },[])
  return (
      <div className="min-h-screen flex flex-col bg-violet-200">
        <div>
            <Navbar></Navbar>
        </div>
        <div className="bg-violet-200">
            <div>
            <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]  ">
            {loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category={category}></Cards>)};    
        </div>
        </div>
        
      </div>
  );
}

export default App;
