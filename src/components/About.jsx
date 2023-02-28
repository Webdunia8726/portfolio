import React from 'react'

function About() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1 className='text-center text-primary'>About Us</h1>
          <div className="col-md-8 mt-5">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis incidunt unde ducimus corrupti aliquam dolorem aut recusandae, voluptatum id dolor repellat quos autem repudiandae ipsum reiciendis in perferendis illum corporis est, officiis fugit nostrum deleniti minus. Modi officia fugit aspernatur ipsum, ratione veritatis voluptatum, laborum incidunt voluptatem totam quae cumque. Quos numquam labore, voluptate perspiciatis placeat repudiandae voluptas neque quibusdam tenetur veritatis dignissimos recusandae a?</p>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit modi dolorem unde ab hic enim pariatur harum magnam iure? Accusamus temporibus dolores ut nam et fuga ipsum optio libero a. Harum omnis sed atque, ipsum earum consectetur officiis voluptates distinctio possimus rem fugiat similique!</p>
            <div data-aos="flip-right">
            <a href="resumeweb.pdf" download>
            <button type="button" class="btn btn-outline-danger mt-3">Download Resume</button>
</a>

            
            </div>
          </div>
          <div className="col-md-4 mt-5">
          <div data-aos="fade-left">

            <img src="raj.png" className="img-thumbnail shadow-lg p-3 mb-5 bg-body-tertiary rounded" alt="..." width={400} height={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
