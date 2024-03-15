import React,{Fragment, useState} from 'react'
import './Header.css'




function AddUserData() {


const [customer_name,setCustomer_Name]=useState("");
const [age,setAge]=useState("");
const [phone,set_phone]=useState("");
const [location,setLocation]=useState("");


const onSubmitForm= async(e)=>{
    e.preventDefault()
    try {
        const body={customer_name,age,phone,location}
        const response=await fetch("http://localhost:5000/addData",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
    });
    setCustomer_Name("");
    setAge("");
    set_phone("");
    setLocation("");
    } catch (err) {
        console.error(err.message);
    }
}

const handleButtonClick=()=>{
    setCustomer_Name("");
    setAge("");
    set_phone("");
    setLocation("");
}


  return (
    <div>
      <Fragment>
                    <div class='addRecords' >
                      <form onSubmit={onSubmitForm}>
                      <div>
                          <label for="custname">Customer Name:</label>
                      
                          <input type="text" id="custname" name="custname" placeholder="Enter customer name" value={customer_name} required onChange={(e)=>{setCustomer_Name(e.target.value)}}></input>
                      </div>
                      <div>
                          <label for="custage">Age:</label>
                          <input type="text" id="custage" name="custage" placeholder="Enter age" value={age} required onChange={(e)=>{setAge(e.target.value)}}></input>
                      </div>
                      <div>
                          <label for="custphone">Phone:</label>
                          <input type="text" id="custphone" name="custphone" placeholder="Enter phone" value={phone} required onChange={(e)=>{set_phone(e.target.value)}}></input>
                      </div>
                      <div>
                          <label for="custlocation">Location:</label>
                          <input type="text" id="custlocation" name="custlocation" placeholder="Enter location" value={location} required onChange={(e)=>{setLocation(e.target.value)}}></input>
                      </div>
                      <button type="submit" variant="primary" >Add data</button>
                        </form>
                    </div>
            </Fragment>
    </div>
  )
}

export default AddUserData
