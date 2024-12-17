const users = require("./ecommercemodel")

const getalluser = async(req, res) => {
    const userdetails = await users.find({})
   res.status(200).json(userdetails)
  }
  const getoneuser =async(req, res) => {
   const {id} = req.params;
   console.log(id);
    const userdetails = await users.findById(id)
    res.status(200).json(userdetails)
  }
 
  const createuser = async(req, res) => {

      // const {email,password} = req.body

        const userdetails = await users.create({

       email:"user@gmail.com",
       password:"passwordu@"

    });
    console.log(userdetails)
    res.status(200).json(userdetails)
  }
  const updateuser = async (req, res) => {
   const filter = {productname: "shirt"};
   const update = {size: "l",price:"400"};
   const userdetails = await users.findOneAndUpdate(filter,update,{new: true})
   res.status(200).json(userdetails)

  }
  const deleteuser = (req, res) => {
    let id = Number(req.params.id);
   let userdetails = users.findByIdAndDelete(id);
    res.status(200).json(userdetails)
  }

  module.exports= {getalluser,getoneuser,createuser,updateuser,deleteuser}