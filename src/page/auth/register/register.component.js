import { specialChars } from '@testing-library/user-event'
import React, { useState , useEffect} from 'react'
import "./register.component.css"


function Register() {

  // const submitHandle = (ev) = {
  

  let [name, setname] = useState('')
  let [email, setemail] = useState('')
  let [password, setpassword] = useState('')
  let [conpassword, setconpassword] = useState('')

  let [nameerr, setnameerr] = useState('')
  let [emailerr, setemailerr] = useState('')
  let [passworderr, setpassworderr] = useState('')
  let [conpassworderr, setconpassworderr] = useState('')

  

  const onChangehandle = (ev) => {
    let { name, value } = ev.target;

    if (name === 'name') {
      setname(value);
    }
    if (name === 'email') {
      setemail(value);
    }
    if (name === 'password') {
      setpassword(value);
    }
    if (name === 'conpassword') {
      setconpassword(value);
    }
    
    
  }

  useEffect(() => {
    if (!name) {
      setnameerr("User name is Empty!!")
    } 
    else {
      setnameerr("")
    }


    if (!email) {
      setemailerr("User email is Empty!!")
    } else if (email && ((!email.includes("@"))||(!email.includes(".com")))){
      setemailerr("invalid email")
    }
    else {
      setemailerr("")
    }
    
    if (!password) {
      setpassworderr("password is empty")
    } else if (password && password.length<8) {
      setpassworderr("invalid password!! password must be 8char in length")
    }
    else {
      setpassworderr("")
    }
    if (!conpassword ) { 
      setconpassworderr("enter password")
    } else if (conpassword && conpassword !== password) {
          setconpassworderr("password didnt matches")
      
    }
    else {
      setconpassworderr("")
    }
     


  }, [name, email, password, conpassword])
  

  

  const handleSubmit = (ev) => {
    ev.preventDefault();

     console.log("name : ",name)
     console.log("email: ",email)
     console.log("password: ",password)
     console.log("confirmation password: ",conpassword)
  }
  
    
    return (
      <div className='myregister'>
        <label>Register Form</label>
        <form className='registerform' onSubmit={handleSubmit}>
          <label type="name" >Enter your name*
            <span>{nameerr}</span>
          </label>
                <input type={"name"} name="name" onChange={onChangehandle}></input>
          <label>Enter user email  *
          <span>{emailerr}</span>
                </label>
                <input type={"email"} name="email" onChange={onChangehandle}></input>
          <label>Enter password *
          <span>{passworderr}</span>
                </label>
                <input type={"password"} name="password" onChange={onChangehandle}></input>
          <label>Confirmation password *
          <span>{conpassworderr}</span>
                </label>
                <input type={"password"} name="conpassword" onChange={onChangehandle}></input>
              
              <button onSubmit={handleSubmit}>Register</button>
      </form>
    </div>
  )
  
}

export default Register