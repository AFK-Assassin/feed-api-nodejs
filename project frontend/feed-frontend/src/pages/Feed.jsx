import React, { useState , useEffect } from 'react'
import axios from 'axios'

const Feed = () => {

  const [post, setPost] = useState([
    {
      _id: "1",
      image: "https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg?semt=ais_hybrid&w=740&q=80",
      caption: "New Picture"
    }
  ])

  useEffect(()=>{

    axios.get("http://localhost:3000/post")
    .then((res)=>{
      setPost(res.data.post)
    })
     

  },[])

  return (
    <section className='feed-section'>
      <h1>Feed</h1>

      {
        post.length > 0 ? (
          post.map((post) => (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1>No post available</h1>
        )
      }

    </section>
  )
}

export default Feed