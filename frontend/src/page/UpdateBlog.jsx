import React,{useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateBlog = () => {
    const {id} = useParams()
    console.log(id); 

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

  const getUserData = async () => {
    const response = await fetch(`http://localhost:5000/blog/${id}`)
    const data = await response.json()
    setPostData(data)
    
  } 
  const handleSubmit = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(`http://localhost:5000/blog/${id}`,{
        method: 'PATCH',
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

  useEffect(() => {
    getUserData()
  },[])
  return (
    <>
      <h1>Update Post</h1>
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
      <button>Update Post</button>
    </form>
    </>
  )
}

export default UpdateBlog
