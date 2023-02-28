 import React from 'react'
import './Navbar.css';
import { NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <>

<div className="container  ">
  <div className="row">
    <div className="col">
    <nav class="navbar navbar-expand bg-body-primary  ">
  <div class="container-fluid mt-0 ">
    
   
    <div  id="navbarSupportedContent">
      <ul class="navbar-nav me-auto ">
        <li class="nav-item ">
        <NavLink className="text-danger"  to={"/"}  class="nav-link active" aria-current="page" >Home</NavLink>
        </li>
        <li class="nav-item px-2  ">
        <NavLink className="text-danger" to={"service"}  class="nav-link active " aria-current="page" >Services</NavLink>
        </li>
        <li class="nav-item px-2">
        <NavLink className="text-danger"  to={"project"}  class="nav-link active" aria-current="page" >Project</NavLink>
        </li>
        <li class="nav-item px-2">
        <NavLink className="text-danger"  to={"contact"}  class="nav-link active" aria-current="page" >ContactUs</NavLink>
        </li>
        <li class="nav-item px-2">
        <NavLink className="text-danger"  to={"about"}  class="nav-link active" aria-current="page" >AboutUs</NavLink>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  </div>
</div>




    
   
    </>
     
  
  

  )
}

export default Navbar;
