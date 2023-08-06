import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';


const Home = () => {
  const [postData, setPostData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    getAllData()
  },[])
  const getAllData = async () => {
    try{
      const response = await fetch('http://localhost:5000/blog',{
        method: "GET",
        headers:{
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      console.log(data);
      setPostData(data)
      setLoading(false)
    } catch(err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {
    try{

      const response = await fetch(`http://localhost:5000/blog/${id}`, {
        method: 'DELETE'
      })
      const data = await response.json()
      getAllData()
    } catch(err) {
      console.log("");
    }
  }


  if(loading){
    return <h1>Loading....</h1>
  }

  return (
    <section className='container'>
      <div className="main">
        <h1>All Posts</h1>
        {postData.map((post) => {
          return <div className="postContainer" key={post._id}>
            <p>{post.post.toLowerCase()}</p>
            <p>{post.name.toUpperCase()}</p>
            <p>@{post.username.toLowerCase()}</p>
            <div className="iconContainer">

              <FaTrash className='icon' onClick={() => handleDelete(post._id)} />
              <Link to={`/blog/update/${post._id}`}>
              
                <FiEdit className='icon' />
              </Link>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Home
