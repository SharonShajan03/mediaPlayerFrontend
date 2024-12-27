import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{width:'100%',height:'300px'}} className='container '>
      <div  className='d-flex justify-content-between'>
         <div style={{width:'300px'}} className=''>
          <h5><i class="fa-solid fa-music"></i>Media Player</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio minima magnam mollitia molestiae neque nam fugiat aspernatur iste expedita officia?</p>
          <p> Quo excepturi repellat sit sunt eum neque praesentium non velit!</p>
         </div>
         <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
         </div>
         <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
         </div>
         <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
          <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
         </div>
      </div>
      <p style={{textAlign:'center', marginTop:'30px'}}>Copyright &copy; Sharon . Built with React.</p>

    </div>
  )
}

export default Footer