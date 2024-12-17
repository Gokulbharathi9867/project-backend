const mongoose = require("mongoose")

const schema = mongoose.Schema

const users = new schema({
  productname:{
    type: String,
  
  },
  productid:{
    type:String,
  },
  uploadpic:{
    type:String,
  
  },
  size:{
    type:String,
  
  },
  price:{
    type:String,
  
  },
  name:{
    type:String,
  
  },
  phonenumber:{
    type:Number,
  
  },
  address:{
    type:String,
  
  },
  emailid:{
    type:String,
  
  },
  billamount:{
    type:String,
  
  },
  deleverystatus:{
    type:String,
  
  },
  date:{
    type:String,
    
  },
  materialtype:{
    type:String,
   
   },
   adminid:{
    type:String,
  
   },
   apassword:{
    type:String,
  
   },
   email:{
    type:String,
  
   },
   password:{
    type:String,
  
   },
   review:{
    type:String,
  
   },
   sno:{
    type:Number,
  
   },
   salesamount:{
    type:Number,
    
   },
   availablestack:{
    type:Number,

   },
   managerid:{
    type:String,
  
   },
   mpassword:{
    type:String,
  
   }

});
module.exports = mongoose.model('users',users)