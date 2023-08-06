import React, { useState } from 'react'
import './create.css'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const navigate = useNavigate()
  const [postData, setPostData] = useState({
    name:"",
    username:"",
    post:""
  })

  const handleChange = (e) => {
    setPostData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch('http://localhost:5000/blog',{
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      
      if(response.ok){
        navigate('/')
      }
    } catch (err){
      console.error(err)
    }
  }


console.log(JSON.stringify(postData));
  return (
    <>
      <h1>Create Post</h1>
    <form className='formContainer' onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder='Enter your name' 
      name="name"
      value={postData.name} 
      onChange={handleChange} 
      />
      <input 
      type="text" 
      placeholder='Enter user name' 
      name="username"
      value={postData.username} 
      onChange={handleChange} 
      />
      <textarea 
      type="text" 
      name="post"
      placeholder='Add Post......' 
      value={postData.post} 
      cols="35" rows="10" 
      onChange={handleChange}
      ></textarea>
      <button>Create Post</button>
    </form>
    </>
  )
}

export default Create
