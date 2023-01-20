import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap"
import {Link, useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
import { editContact, getContact } from '../Js/Action/Contact'

const EditContact = () => {
  const {_id} = useParams();
  const [newContact, setNewContact]= useState({
    name: "",
  
    email: "",
    phone: ""
  });
  const contactToGet = useSelector (state => state.contactReducer.contactToGet)
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value});
  };
  useEffect(() => {
    dispatch(getContact(`${_id}`));
    
  } )
  
  const edit = () => {
    dispatch (editContact(_id, newContact));
  };
  return (
    <div>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
            type="text" 
            placeholder={`${contactToGet.name}`} 
            name='name' 
            value={newContact.name} 
            onChange ={handleChange} 

        />
      
        <Form.Label>Email </Form.Label>
        <Form.Control 
            type="email"
            placeholder= {`${contactToGet.email}`}
            name='email' 
            value={newContact.email} 
            onChange ={handleChange} />
        <Form.Label>phone</Form.Label>
        <Form.Control 
            type="number" 
            placeholder= {`${contactToGet.phone}`}
            name='phone' 
            value={newContact.phone} 
            onChange ={handleChange} />        
      </Form.Group>
      <Link to={'/Users'}>
      <Button 
        variant="primary" 
        type="submit"
        onClick={edit}
        >
        Submit
      </Button>
      </Link>
    </Form>
    </div>
  )
}

export default EditContact