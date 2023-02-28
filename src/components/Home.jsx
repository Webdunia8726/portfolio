import React from 'react'
import './Home.css';
import Contact from './Contact ';
import Service from './Service';
import Project from './Project';
import Headerdown from './Headerdown';
import About from './About';
import { useTypewriter } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';





const Home = () => {
  const [text] = useTypewriter({
    words: ['Webdeveloper', 'Webdesigner'],
    loop: 0
  })
  return (
    <>
    
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mt-5">



            <p className='para1'>HEY! I Am</p>
            <p className='para2'>Raj Patel <span className='writer1'>{text}</span></p>
            <p>Fronted developer with high experience Webdesigning and development</p>
            <p>producting the Quilty work</p>
            <NavLink to={"/contact"}><button type="button" class="btn btn-danger">Hire Me</button></NavLink>




          </div>



          <div className="col-md-6 ">

            <img src="rajorg.png" className='img-fluid' alt="Girl in a jacket" width="500" height="500" />


          </div>
        </div>
      </div>

      <Service />
      <Project />
      <div className="container mt-5 mb-5 ">
        <About />
      </div>
      <Contact />

      <Headerdown />

    </>
  )
}

export default Home;
