import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './components/userReducer';

function Update() {
  const {id} = useParams();
  const users = useSelector((state)=>state.users);
  const existingUser = users.filter(f => f.id==id);
  const [firstname,lastname,email,comapany,number,description,bio] = existingUser[0];
  const [ufirstname,setufirstname] = useState('firstname')
  const [ulastname, setuLastname] = useState('lastname');
  const [uemail, setuEmail] = useState('email');
  const [ucompany, setuCompany] = useState('company');
  const [unumber, setuNumber,] = useState('number');
  const [udescription, setuDescription] = useState('description');
  const [ubio, setuBio] = useState('bio');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateUser({
      id:id,
      firstname: ufirstname,
      lastnamename: ulastname,
      email: uemail,
      description: udescription,
      number: unumber,
      bio: ubio,
      
    }))
    navigate('/viewaccount')
  }
  return  (
    <div style={{marginTop:'100px'}}>
      
    <form onSubmit={handleUpdate} >
    <h1>update</h1>
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
        id="outlined-read-only-input"
        label="First Name"
        value={ufirstname} onChange={e => setFirstname(e.target.value)}
        
      />
        <TextField 
        id="outlined-read-only-input"
        label="Last Name"
       value={ulastname} onChange={e => setLastname(e.target.value)}
      />

      </div>
      
     <div>
     <TextField style={{marginLeft:'500px'}}
        id="outlined-read-only-input"
        label="Email"
        value={uemail} onChange={e => setEmail(e.target.value)}
       
        
      />
      <TextField
        id="outlined-read-only-input"
        label="Phone number"
        value={unumber}
       
      />
 
      </div> 
      <div>
      <TextField style={{marginLeft:'500px'}}
        id="outlined-read-only-input"
        label="Designation"
        value={udescription} onChange={e => setDesignation(e.target.value)}
       
      />
      <TextField
        id="outlined-read-only-input"
        label="company"
        value={ucompany} onChange={e => setCompany(e.target.value)}
      
      />
    
      </div>
    
    <div>
    <TextField style={{marginLeft:'500px',width:'790px',height:'500px'}}
        id="outlined-read-only-input"
        label="BIo"
       value={ubio } onChange={e => setBio(e.target.value)}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
    
    <div>
    <Button style={{marginLeft:'500px',marginTop:'-800px'}} variant="contained">Update</Button>
    <Button style={{marginLeft:'60px',marginTop:'-800px'}}  variant="outlined">Cancel</Button>
    </div>
  </Box>
  </form>
  </div>
  )
}

export default Update
