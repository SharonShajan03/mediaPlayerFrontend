import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import landingImg from '../assets/img1.gif'
import feature1 from '../assets/cardimg1.jpg'
import feature2 from '../assets/cardimg2.jpg'
import feature3 from '../assets/cardimg3.jpg'


const Landing = () => {
  return (
    <div style={{ paddingTop: '80px' }} className='container'>
    {/* landing head */}
    <div className='row align-items-center'>
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:'justify'}}>
          Media player app will allow user to add or remove their uploaded videos from youtube and also allow them to arrange it in different category by drag and drop. user can also have the provision to manage their watch history as well. What are you waiting for ,Lets start Explororing our website!!!
        </p>
        <Link to={'/home'} className='btn btn-info'>Get Started!</Link>
      </div>
      <div className="col"></div>
      <div className="col-lg-6">
        <img src={landingImg} className='img-fluid ms-5' alt="" />
      </div>
    </div>
    {/* features */}
    <div className="my-5">
      <h3 className="text-center">Features</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature1} />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Users can upload, view and remove the video
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature2} />
            <Card.Body>
              <Card.Title>Categorise Videos</Card.Title>
              <Card.Text>
                Users can Categorise the videos by drag and drop.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card className='p-2' style={{ width: '20rem' }}>
            <Card.Img height={'250px'} variant="top" src={feature3} />
            <Card.Body>
              <Card.Title>Managing Videos history</Card.Title>
              <Card.Text>
                Users can manage the watch history of all videos.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
    {/* youtube */}
    <div className='my-5 row align-items-center border rounded p-5'>
      <div className="col-lg-5">
        <h3 className='text-warning'>
          Simple, Fast, And Powerful
        </h3>
        <p style={{ textAlign: 'justify' }}>
          <span className='fs-5'>Play Everything : </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero nemo nesciunt earum minus dolorum.
        </p>
        <p style={{ textAlign: 'justify' }}>
          <span className='fs-5'>Categorise Videos : </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero nemo nesciunt earum minus dolorum.
        </p>
        <p style={{ textAlign: 'justify' }}>
          <span className='fs-5'>Managing History : </span>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro vero nemo nesciunt earum minus dolorum.
        </p>
      </div>
      <div className="col"></div>
      <div className="col-lg-5">
        <iframe width="514" height="314" src="https://www.youtube.com/embed/Y4JHUWd5w3w" title="The Big Billion Sale (FlipKart) | Reaction | 2024 | HDFC Credit Card Holders Welcome |  Malayalam" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  </div>
  )
}

export default Landing