import { useState } from "react";
import "./App.css";

function App() {
  const [formdata,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",streetAddress:"",city:"",state:"",
    comments:false,candidates:false,offers:false,pushNotification:"",postal:""
})

  function changeHanler(event){
    const {value,name,type,checked} = event.target
    setFormData(prevState =>{
      return(
        {
          ...prevState,[name]:type==='checkbox' ? checked : value
        }
      )
    })
  }

  function changeSubmitHandler(event){
    event.preventDefault()
    console.log(formdata)
  }
  return (
    <div className="flex flex-col items-center mt-6">
      <form onSubmit={changeSubmitHandler}>
      <label htmlFor="firstName">firstName</label><br/>
      <input type="text" className="outline" name="firstName" value={formdata.firstName} id="firstnName" placeholder="hennu" onChange={changeHanler}></input><br/>
      <label htmlFor="lastName">lastName</label><br/>
      <input type="text" className="outline" name="lastName" value={formdata.lastName} id="lastName" placeholder="patel" onChange={changeHanler}></input><br/>
      <label htmlFor="email">email</label><br/>
      <input type="email" className="outline" name="email" value={formdata.email} id="email" placeholder="abc@gmail.com" onChange={changeHanler}></input><br/>
      <label htmlFor="country">country</label><br/>
      <select 
      id="country"
      onChange={changeHanler}
      value={formdata.country}
      name="country"
      className="outline"
      >
        <option>India</option>
        <option>United states</option>
        <option>Canada</option>
        <option>Maxico</option>
      </select><br/>
      <label htmlFor="streetadd">street Address</label><br/>
      <input type="text" className="outline" name="streetAddress" value={formdata.streetAddress} id="streetadd" placeholder="A-60" onChange={changeHanler}></input><br/>
      <label htmlFor="city">city</label><br/>
      <input type="text" className="outline" name="city" value={formdata.city} id="city" placeholder="Daman" onChange={changeHanler}></input><br/>
      <label htmlFor="state">state</label><br/>
      <input type="text" className="outline" name="state" value={formdata.state} id="state" placeholder="Gujarat" onChange={changeHanler}></input><br/>
      <label htmlFor="postal">Postal</label><br/>
      <input type="text" className="outline" name="postal" value={formdata.postal} id="postal" placeholder="394540" onChange={changeHanler}></input><br/>
      <fieldset>
        <legend>By email :- </legend>
        <div className="flex">
              <input type="checkbox" id="comments" name="comments" checked={formdata.comments} onChange={changeHanler} />
        <div>
            <label htmlFor="comments">Comments</label>
            <p>Get notified when someones posts a comment on a posting</p>
        </div>
        </div>


        <div className="flex">
              <input type="checkbox" id="candidates" name="candidates" chacked={formdata.candidates} onChange={changeHanler} />
        <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get notified when a candidate applies for a job</p>
        </div>
        </div>
        
         <div className="flex">
              <input type="checkbox" id="offers" name="offers" chacked={formdata.offers} onChange={changeHanler} />
        <div>
            <label htmlFor="offers">Offers</label>
            <p>Get notified when a candidate accepts or rejects an offers</p>
        </div>
        </div>
      </fieldset><br/>
      <fieldset>
        <legend>push notification</legend>
        <p>These are delivered vis SMS to your mobile phone</p>

        <input type="radio" name="pushNotification" id="pushEverything" value="Everything" onChange={changeHanler}></input>
        <label htmlFor="pushEverything">Everything</label><br/>

        <input type="radio" name="pushNotification" id="pushEmail" value="Same as email" onChange={changeHanler}></input>
        <label htmlFor="pushEmail">Same as email</label><br/>

        <input type="radio" name="pushNotification" id="pushNothing" value="No push notification" onChange={changeHanler}></input>
        <label htmlFor="pushNoting">No Push Notification</label><br/>
      </fieldset>
      <button className="bg-blue-500 text-white font-bold rounded py-2 px-4" type="Submit">save</button>
      </form>
    </div>
  );
}

export default App;
