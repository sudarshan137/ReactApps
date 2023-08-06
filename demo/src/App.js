
import React from 'react'
import './App.css';

function App() {

  const [formData, setFormData] = React.useState(
    {
      firstName:"",
      lastName :"",
      email:"",
      comments:"",
      isFriendly:true,
      employment:"",
      favColor: ""
    }
  )

  function HandleChange(event){
      const {name, type,value,checked} = event.target;

      setFormData(prevFormData => {
        return {
          ...prevFormData,
          [name] : type==="checkbox"? checked : value
        }
      })
  }

  function HandleSubmit(event){
    event.preventDefault();
    console.log (formData);
  }
  
 
  return (
    <form onSubmit={HandleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        name="firstName"  
        onChange={HandleChange}    
        value={formData.firstName}  
      />
      <input
        type='text'
        placeholder='Last Name'
        name="lastName"     
        onChange={HandleChange}  
        value={formData.lastName} 
      />
      <input
        type='text'
        placeholder='Email' 
        name="email"   
        onChange={HandleChange}   
        value={formData.email} 
      />
      <textarea
        placeholder='Comments'
        name='comments'
        onChange={HandleChange}
        value={formData.comments}
      />
      <input 
        type='checkbox'
        name='isFriendly'
        id='isFriendly'
        checked={formData.isFriendly}
        onChange={HandleChange}
      />
      <label htmlFor='isFriendly'> Are you Friendly?</label>

      <fieldset>
        <legend>Current Employment Status</legend>
          <input 
              type='radio'
              value="unemployed"
              name='employment'
              checked={formData.employment === "unemployed"}
              onChange={HandleChange}
              id='unemployed'
          />
          <label htmlFor='unemployed'>Unemployed</label>
          <br/>
          <input 
              type='radio'
              value="part-time"
              name='employment'
              checked={formData.employment === "part-time"}
              onChange={HandleChange}
              id='part-time'
          />
          <label htmlFor='part-time'>Part-time</label>
          <br/>

          <input 
              type='radio'
              value="full-time"
              name='employment'
              checked={formData.employment === "full-time"}
              onChange={HandleChange}
              id='full-time'
          />
          <label htmlFor='full-time'>Full-time</label>
          <br/>
      </fieldset>
      <br/>
      <label id='favColor'>What the fuck is your Favourite Color?</label>
      <br/>
      <select
        name='favColor'
        id='favColor'
        value={formData.favColor}
        onChange={HandleChange}
      >
          <option value='Red'>Red</option>
          <option value='Green'>Green</option>
          <option value='Yellow'>Yellow</option>
          <option value='Blue'>Blue</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
  );
}

export default App;
 