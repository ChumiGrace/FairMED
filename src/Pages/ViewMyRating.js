import React from 'react'
import Sidebardoc from '../Components/Sidebar/Sidebardoc'
import Placeholder from '../Components/Assets/placeholder.png';

function ViewMyRating() {
  return (
    <div>
      <div>
        <Sidebardoc />
      </div>
      <div className='view-doctor-dashboard-content'>
      <div className="container">
        <div className="col">
          <div className="row-lg-6 row-md-12 mb-4 mb-md-0  d-flex  justify-content-center card card-rating">
          <div className='rate-header-left d-flex gap-3 p-3 doctorName'>
          <img src={Placeholder} alt="Profile Picture" />
          <div>
            <h2 className="pt-4 pb-0">Doctor</h2>
            <p>   
            <i className="fa fa-star font fs-5"></i>
              Average Rating</p>
          </div>
    </div>
    <hr className='mx-3'/>
  
          </div>
          <div className="row-lg-6 row-md-12 d-flex flex-row flex-wrap  card p-3 card-rating">
              <div className="contact-info">
        <ul className="list-unstyled">
          <li>
            <strong><i class='bx bx-user'></i></strong> John Doe
          </li>
          <li>
            <strong><i class='bx bx-phone'></i></strong> 123-456-7890
          </li>
          <li>
            <strong><i class='bx bx-envelope' ></i></strong> JohonDoe@email.com
          </li>
          <li>
            <strong><i class='bx bx-id-card'></i></strong> 
          </li>
          <li>
          <div className='bio'>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus ras
            purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </div>
          </li>
        </ul>
      </div>
  

  </div>

    </div>
   </div> 


  <div className='review-box  d-flex flex-column align-items-center'>
    <h3 className='p-3 text-center '>Reviews</h3>
  <div className="container">
  <div className="row">
    <div className="col-md-8">
      <div className="media g-mb-30 media-comment">
        <div className="media-body u-shadow-v18 g-bg-secondary g-pa-30">
          <div className="g-mb-15">
            <h5 className="h5 g-color-gray-dark-v1 mb-0">John Doe</h5>
            <span className="g-color-gray-dark-v4 g-font-size-12">
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
            <i className="fa fa-star font fs-5"></i>
              
            </span>
          </div>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin. Cras purus odio, vestibulum in
            vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
            vulputate fringilla. Donec lacinia congue felis in faucibus ras
            purus odio, vestibulum in vulputate at, tempus viverra turpis.
          </p>
         
        </div>
      </div>
    </div>
  </div>
</div>


  </div>
      </div>
    </div>
  )
}

export default ViewMyRating