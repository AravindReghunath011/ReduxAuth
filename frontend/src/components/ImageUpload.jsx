import React, { useState } from 'react'
import axios from 'axios'


const ImageUpload = () => {
    const [file,setFile] =  useState('')
    const handleSubmit = async()=>{
        console.log(file)
        const formdata = new FormData()
    formdata.append('file',file)
    
    axios.post('http://localhost:5000/api/users/uploadimg',formdata,{
        headers:{"Content-Type":"multipart/form-data"}
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    }
  return (
    <div>
        <input onChange={(e)=>setFile(e.target.files[0])} type="file" />
        <button onClick={handleSubmit}>upload</button>
    </div>
  )
}

export default ImageUpload