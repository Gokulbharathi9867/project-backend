const express = require('express')

const app = express()
const port = 3000

const ecommerceroutes = require('./ecommercerouter')
const { default: mongoose } = require('mongoose')
app.use(express.json())

app.use((error, req, res, next) => {
  if (error instanceof mongoose.CastError) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  res.status(500).json({ message: 'An error occurred', error });
});

const cors = require("cors");
app.use(
  cors({
    origin:"*",
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE"
  })
);
const CONECT_STR ="mongodb+srv://bharathibairava9867:gokul7851@cluster0.wnp68.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";

mongoose
.connect(CONECT_STR)
.then(()=>{
  console.log("database connect successfully")
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch((error)=>{
  console.error(`error in connecting db: ${error.message}`)
})

app.use('/ecommerce',ecommerceroutes)

