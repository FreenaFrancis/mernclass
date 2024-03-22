// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// export default function Account() {
// return (
// 	<div style={{ display: 'block',
// 				width: 700,
// 				padding: 30 }}>
// 	<h4>React-Bootstrap Form Component</h4>
// 	<Form>
// 	<Form.Group>
// 		<Form.Label>Enter your full name:</Form.Label>
// 		<Form.Control type="text"
// 						placeholder="Enter your full name" />
// 		</Form.Group>
// 		<Form.Group>
// 		<Form.Label>Enter your email address:</Form.Label>
// 		<Form.Control type="email"
// 						placeholder="Enter your your email address" />
// 		</Form.Group>
// 		<Form.Group>
// 		<Form.Label>Enter your age:</Form.Label>
// 		<Form.Control type="number" placeholder="Enter your age" />
// 		</Form.Group>
// 		<Button variant="primary" type="submit">
// 		Click here to submit form
// 		</Button>
// 	</Form>
// 	</div>
// );
//

import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addUser } from './components/userReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Account() {
  
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [number, setNumber,] = useState('');
  const [description, setDescription] = useState('');
  const [bio, setBio] = useState('');


  const users= useSelector((state)=>state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const handleSubmit = (event) =>{
    event.preventDefault();
    // 
    dispatch(addUser ({id: users[users.length - 1] . id + 1,firstname,lastname,email,number,description,company,bio}))
    navigate('/viewaccount')
  }
  return (
    <div style={{marginTop:'100px'}}>
      <h1></h1>
      <form onSubmit={handleSubmit} >
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '45ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div >
        
       
        <TextField style={{marginLeft:'500px'}}
          // id="outlined-read-only-input"
          label="First Name"
         onChange={e => setFirstname(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
        />
          <TextField 
          id="outlined-read-only-input"
          label="Last Name"
          onChange={e => setLastname(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
        />
 
        </div>
        
       <div>
       <TextField style={{marginLeft:'500px'}}
          id="outlined-read-only-input"
          label="Email"
          onChange={e => setEmail(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
          
        />
        <TextField
          id="outlined-read-only-input"
          label="Phone number"
          onChange={e => setNumber(e.target.value)} 
          InputProps={{
            readOnly: true,
          }}
        />
   
        </div> 
        <div>
        <TextField style={{marginLeft:'500px'}}
          id="outlined-read-only-input"
          label="Designation"
          onChange={e => setDescription(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
        />
        <TextField
          id="outlined-read-only-input"
          label="company"
          onChange={e => setCompany(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
        />
      
        </div>
      
      <div>
      <TextField style={{marginLeft:'500px',width:'790px',height:'500px'}}
          id="outlined-read-only-input"
          label="BIo"
          onChange={e => setBio(e.target.value)} 
          // InputProps={{
          //   readOnly: true,
          // }}
        />
      </div>
      
      <div>
      <Button style={{marginLeft:'500px',marginTop:'-800px'}} variant="contained">Submit</Button>
      {/* <Button style={{marginLeft:'60px',marginTop:'-800px'}}  variant="outlined">Cancel</Button> */}
      </div>
    </Box>
    </form>
    </div>
  )
}

export default Account

