import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState({firstName:"" ,lastName:"" ,email:"" , comment:"" ,isVisible:true,mode:"",favcar:""});

  function changeHandler(event){
      const {name,checked,value,type} = event.target
      setFormData(prevformdata =>{
      return {...prevformdata,
        [name]:type==='checkbox'?checked :value
      }
    })
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("print the formdata");
    console.log(formData);
  }
  return (
    <div className="place-content-center ">
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName}></input><br/><br/>
          <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName}></input><br/><br/>
          <input type="email" placeholder="enter email" onChange={changeHandler} name="email" value={formData.email}></input><br/><br/>
          <textarea placeholder="enter comment" name="comment" value={formData.comment} onChange={changeHandler}></textarea><br/><br/>
          <input type="checkbox" id="isvisible" name="isVisible" onChange={changeHandler} checked={formData.isVisible}></input>
          <label htmlFor="isvisible">Am i visible?</label><br/><br/>
          <fieldset>
            <legend>==================Mode:========================</legend>
           <input type="radio" name="mode" id="onlinemode"onChange={changeHandler} value='online-mode' checked={formData.mode==='online-mode'}></input><label htmlFor="onlinemode">
            online mode
          </label>
          <input type="radio" name="mode" id="offlinemode"onChange={changeHandler} value='offline-mode' checked={formData.mode==='offline-mode'}></input><label htmlFor="offlinemode">
            offline mode
          </label>
          </fieldset><br/><br/>
          <select name="favcar" value={formData.favcar} onChange={changeHandler} id="favcar">  
              <option value="scarpio">scarpio</option>
              <option value="Thar">Thar</option>
              <option value="creta">creta</option>
              <option value="verna">verna</option>
              <option value="bike">bike</option>
          </select>
         <br/><br/>
         <button type="submit">submit</button>

        </form>
    </div>
  );
}

export default App;
