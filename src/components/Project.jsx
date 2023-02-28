import React from 'react'
import './Project.css';
function Project() {
  return (
    <>
      <div className="container mt-5">

        <p className='mypro'>My Projects</p>
      </div>
      <div className="container-fluid shadow-sm p-3 mb-5 bg-body-tertiary rounded">
        <div id="carouselExampleCaptions" class="carousel slide data-ride">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="project1.png" class="d-block w-100" height={400} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="project2.png" class="d-block w-100" height={400} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="project3.png" class="d-block w-100" height={400} alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>


<span className='border border-white'>
<div className="container shadow-sm p-3 mb-5 bg-body-tertiary rounded">
  <h2 className='text-center mt-5 mb-5 text-dark'>My Project Videos</h2>
  <div className="row">
  
    <div className="col-md-4 text-center">
<div className="embed-responsive embed-responsive-16ny9 pb-5">
<iframe className='embed-responsive-item' src="https://www.youtube.com/embed/8KFqdsf21ng" ></iframe>
</div>
    </div>
    <div className="col-md-4 text-center">
    
    <div className="embed-responsive embed-responsive-16ny9 pb-5">
    <iframe  src="https://www.youtube.com/embed/a14GydkqMHw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
    </div>
    <div className="col-md-4 text-center">
    <div className="embed-responsive embed-responsive-16ny9 pb-5">
    <iframe  src="https://www.youtube.com/embed/mD0o3o3TbWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>

    </div>
  </div>
</div>
</span>





    </>
  )
}

export default Project;
