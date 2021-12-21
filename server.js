const express = require('express')
const server=express()
require('dotenv').config()
const connectDB=require('./config/connectDB')
const student=require('./models/studentSchema')
connectDB()

const addStudent=async()=> {
    const houssem = new student ({ name:'houssem2022',age:26, data:{message :'hello houssem'}})
    await houssem.save()

    const taha = new student ({ name:'taha2022',age:26, data:{message :'hello taha'}})
    await taha.save()
}
const deleteStudent=async()=>{
   
    await student.findByIdAndRemove("61bf31b426cda5388d8ee1f5")
}
const updateSudent=async()=>{
    await student.findByIdAndUpdate("61be5175b4071d1eec17431d", {$set:{name:"Houssem Ben Ncira"}})

}
const getStudent=async()=>{
    const result = await student.find()
    console.log(result)
}
//getStudent()

//updateSudent()
deleteStudent()
//addStudent()

const PORT= process.env.PORT||5000
server.listen(PORT, (err)=> err? console.error(err):console.log(`server listening on port ${PORT}`))
