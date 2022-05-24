import React,{useEffect, useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
export default function App() {

const [login,setLogin] = useState({
  email:"",
  password:"",
});

const [formError , setFormError] =useState({});
const [ isSubmit,setIsSubmit]= useState(false);
console.log(formError)
const handleChange=(e)=>{
const {name, value} =e.target
setLogin({...login,[name]:value});

}


const handleSubmit=(e)=>{
   e.preventDefault();
   setFormError(validate(login))
   setIsSubmit(true);
}
useEffect(()=>{
  console.log("hiiii")
  console.log(formError);
  if(Object.keys(formError).length === 0 && isSubmit){
    console.log(login)
  }
},[formError])

const validate =(values)=>{
  var errors = {};
  if(!values.email){
    errors.email="Email is Required"
  }
  if(!values.password){
    errors.password="Password is Required"
  }
   console.log(errors.email)
  return errors;

}






  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4 col-sm-12 brand'>
        <i className="fa-brands fa-drupal"></i>
          <i className='main-heading'>cleanMyCar</i>
          <p className='sub-heading'>india's frist waterless <br></br>
          car cleaning company</p>
        
        </div>

        <div className='col-md-6 col-sm-11'>
        <p className='help'>Need help?</p>
        <h4 className='login-heading'>Log In</h4>
        <form className='login-form'>

        <label className='lebal'>Email</label>
        <input className='inputTag' type="text" name='email' placeholder="joe@email.com" 
        value={login.email} onChange={handleChange}/>
        <p className='validation'>{formError.email}</p>
        <label  className='lebal'>Password</label>
        <input  className='inputTag' type="text" name='password' placeholder="Enter your Password"
         value={login.password} onChange={handleChange}/>
         <p className='validation'>{formError.password}</p>
        <p className='forgot'>forgot password ?</p>

        <button className='submit button' onClick={handleSubmit}>Login</button>


        </form>
    
        </div>
      </div>

      
      
    </div>
  )
}

