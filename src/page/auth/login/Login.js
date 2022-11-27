import React, { useEffect, useState } from 'react'

function Login() {


    let [name, setName] = useState('')
    let [password, setPassword] = useState('')
    let [nameErr, setnameErr] = useState('')
    let [passwordErr, setpasswordErr] = useState('')


    const onChangeHandle = (ev) => {
        let { name, value } = ev.target;

        if (name === 'name') {
            setName(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
        
        
    }



    useEffect(() =>{

        if (!name) {
            setnameErr("name is empty");
        } else if (name && (!name.includes("@") || (!name.includes(".com")))) {
            setnameErr("invalid username")
            
        }  
        else {
            setnameErr("")
        }
        
        if (!password) {
            setpasswordErr("required password");
        }
        else {
            setpasswordErr("")
        }
         
     },[name , password])



    const handleSubmit = (ev) => {
        ev.preventDefault();

        console.log("userName :", name);
        console.log("userpassword :", password);

        
    }


  return (
      <div>
          <form onSubmit={handleSubmit}>
              <label className='name'> Enter User Name</label>
              <input type="name" name='name' defaultValue ={name || ""}  onChange={onChangeHandle}></input>
              <span>{nameErr}</span>
              <br></br>

              <label >Enter password</label>
              <input type="password"  name='password' onChange={onChangeHandle}></input>
              <span>{passwordErr}</span>
              <br></br>
              <button onSubmit={ handleSubmit}>Login</button>
          </form>
    </div>
  )
}

export default Login