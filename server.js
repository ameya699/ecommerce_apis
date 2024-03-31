const express=require("express");
const PORT=process.env.PORT || 8000;
const app=express();
const products_routes=require('./routes/products');

app.use('/api/products',products_routes)

app.listen(PORT,async()=>{
    console.log(`Listening on port ${PORT}`);
})

app.get("/",(req,res)=>{
    res.json({status:"server live at port "+PORT})
})

