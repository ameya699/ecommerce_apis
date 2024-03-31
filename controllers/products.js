const getAllProducts=async(req,res)=>{
    res.status(200).json({msg:"in get all products"});
}


const getAllProductsTesting=async(req,res)=>{
    res.status(200).json({msg:"in get all productsTesting"});
}


module.exports={getAllProducts,getAllProductsTesting}