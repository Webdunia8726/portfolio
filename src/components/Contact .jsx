import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <>
    <div data-aos="zoom-out-left">
      <div className="container-md mt-5">
        
        <div className="row">
          

          <div className="col-md-6 text-md-center mt-5 pt-3">
            <h1>Get in Touch
            </h1>
            <h2>Contact me</h2>

          </div>


          <div className="col-md-6 border border-warning bg-white mt-5">
            

            <div className="container p-2  ">
              <div className="mb-3 mt-5">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                
              </div>
              <button type="button " class="btn btn-success">Submit</button>
            </div>

          </div>
        </div>
        </div>
      </div>

      
    </>
  )
}

export default Contact;
