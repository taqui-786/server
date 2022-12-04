const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json())
app.get("/", (req,res)=>{
    res.json("hello main page TESTING")
})

app.listen(port , () =>{
    console.log("listinig to port "+ port)
});