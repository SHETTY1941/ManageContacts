require("dotenv").config();
console.log(process.env.MONGO_URI);
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const Contact = require('./Contact');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

//create Contact
app.post("/api/contacts",async (req,res)=>{
    const contact = await Contact.create(req.body);
    res.send(contact);
});

//get all contacts
app.get("/api/contacts",async (req,res)=>{
    const contacts = await Contact.find();
    res.send(contacts);
});
 
//update contact
app.put("/api/contacts/:id",async (req,res)=>{
    const contact = await Contact.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
    });
    res.send(contact);
});

//delete contact
app.delete("/api/contacts/:id",async (req,res)=>{
    await Contact.findByIdAndDelete(req.params.id);
    res.send({message: 'deleted'});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});