const express=require('express');
const app=express();
const cors=require('cors');
const pool=require("./db")

//middleware
app.use(cors());
app.use(express.json());


// add data
app.post("/addData",async(req,res)=>{
    try {
        const {customer_name,age,phone,location}=req.body;
        //console.log(customer_name)
        const newdata=await pool.query("INSERT INTO data(customer_name,age,phone,location) VALUES($1,$2,$3,$4) RETURNING *",[customer_name,age,phone,location])
        
        res.json(newdata.rows[0])
        console.log(newdata)
    } catch (err) {
        console.error(err.message)
    }
})


// edit data
app.put("/editData/:sno",async(req,res)=>{
    try {
        const {sno}=req.params;
        const {customer_name,age,phone,location}=req.body;
       // console.log(customer_name)
        const newdata=await pool.query("UPDATE data SET customer_name=$1,age=$2,phone=$3,location=$4 WHERE sno=$5",[customer_name,age,phone,location,sno])
        
        res.json(newdata.rows[0])
        console.log(newdata)
    } catch (err) {
        console.error(err.message)
    }
})

//get all the data
app.get("/customers",async(req,res)=>{
    try {
        const allData=await pool.query("SELECT * FROM data ORDER BY sno")
        res.json(allData.rows)
    } catch (err) {
        console.error(err.message)
    }
})


//sort data by name
app.get("/customers/nameSort",async(req,res)=>{
    try {
        const nameSortData=await pool.query("SELECT * FROM data ORDER BY customer_name")
        res.json(nameSortData.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//sort data by date
app.get("/customers/date",async(req,res)=>{
    try {
        const dateSortData=await pool.query("SELECT * FROM data ORDER BY DATE(created_at)")
        res.json(dateSortData.rows)
    } catch (err) {
        console.error(err.message)
    }
})

//sort data by time
app.get("/customers/time",async(req,res)=>{
    try {
        const timeSortData=await pool.query("SELECT * FROM data ORDER BY EXTRACT(HOUR FROM created_at), EXTRACT(MINUTE FROM created_at), EXTRACT(SECOND FROM created_at)")
        res.json(timeSortData.rows)
    } catch (err) {
        console.error(err.message)
    }
})



//delete records
app.delete("/customer/:sno",async(req,res)=>{
    try {
        const {sno}=req.params;
        const delData=await pool.query("DELETE FROM data WHERE sno=$1",[sno]);
        res.json("data deleted")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(5000,()=>{
    console.log("server has started on port 5000")
});
