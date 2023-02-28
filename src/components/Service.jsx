import React from 'react'
import './Service.css';
import './bootstrap.css';
function Service() {
  return (
    <>
   

      <div className="container mt-5">

        <p className='para1'>My Awesome</p>
        <p className='para2'>services</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ea rem esse?</p>
        <button type="button" class="btn btn-warning">Warning</button>

    

      </div>

      

        <div className="container mt-5" >
          <div className="row">

            <div className="col-md-6" >
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Webdevelopment</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go Projects</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div class="card">
                <div class="card-header">
                  Featured
                </div>
                <div class="card-body">
                  <h5 class="card-title">Webdesigning</h5>
                  <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" class="btn btn-primary">Go Projects</a>
                </div>
              </div>
            </div>
          </div>
        </div>


      




    </>
  )
}

export default Service;
