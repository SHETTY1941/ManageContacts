import React, {useState,useEffect} from 'react'
import API from './api'
import ContactForm from './ContactForm'
import "./App.css";
import ContactList from './ContactList';
const App = () => {

  const [contacts,setContacts] = useState([]);
  const [editContact,setEditContact] = useState(null);
  console.log(editContact)
  //load all contacts 
  const fetchContacts = async ()=>{
    const res = await API.get("/")
    setContacts(res.data)
  }

  useEffect(()=>{
    fetchContacts();
  },[])

  //add new Contact 

  const addContact = async (data)=>{
    await API.post("/",data);
    fetchContacts();
    //console.log("sent successfully");
  };
  
  //delete contact
  const deleteContact = async (id) =>{
    await API.delete(`/${id}`);
     fetchContacts();
  }

  // update contact
  const updateContact = async (data)=>{
    await API.put(`/${editContact._id}`,data);
    setEditContact(null);
    fetchContacts();
  }
  return (
    <div>
      <ContactForm onSubmit={editContact? updateContact :addContact} existing={editContact}/>
      <ContactList contacts={contacts} onDelete={deleteContact} onEdit={setEditContact}/>
    </div>
  )
}
export default App