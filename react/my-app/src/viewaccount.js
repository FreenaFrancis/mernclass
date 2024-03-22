import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
import { Button} from '@mui/material';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteUser } from './components/userReducer';
function Viewaccount() {
 const users = useSelector((state) => state.users);
 console.log(users)
 const dispatch = useDispatch();
 const handleDelete = (id) =>{
dispatch(deleteUser({id:id}))
 } 
const navigate = useNavigate()
  return (
    <div>
      

<MDBTable>
      <MDBTableHead dark>
        <tr>
        <th scope='col'>ID</th>
          <th scope='col'>Firstname</th>
          <th scope='col'>Lastname </th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone number</th>
          <th scope='col'>Company</th>
          <th scope='col'>Description</th>
          <th scope='col'>Bio</th>
          <th> Action</th>
          
        </tr>
      </MDBTableHead>
      {/* {dept.map((dept)=>{ */}
      {users.map((user)=>{
        
      })}
          return(
      <MDBTableBody>
           
        <tr>
        <td>{users.fname}</td>
        <td>{users.lname}</td>
        <td>{users.email}</td>
        <td>{users.number}</td>
        <td>{users.company}</td>
        <td>{users.description}</td>
        <td>{users.bio}</td>

          {/* <td>{dept.departmentname}</td>
          <td>{dept.profileImage}</td>
          <td>{dept.year}</td>
          <td>{dept.description}</td> */}
          {/* <td><Button ><IconButton><DeleteIcon/></IconButton>  </Button></td> */}
         <td>  <Link to={`update/edit/id/${users.id}`}><Button variant="contained" href="#contained-buttons">Edit</Button></Link></td>
         <td>  <Button  onClick= {handleDelete(users.id)} variant="contained" href="#contained-buttons">Delete</Button></td>
        </tr>
      
      </MDBTableBody>
        )
   
    </MDBTable>
    </div>
  )
}

export default Viewaccount
