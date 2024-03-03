const express=require('express');
const app=express();
const cors=require('cors');
const pool=require("./db")

//middleware
app.use(cors());
app.use(express.json());



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


app.listen(5000,()=>{
    console.log("server has started on port 5000")
});
