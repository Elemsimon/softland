import React from 'react'
import steps from '../assets/img/steps.svg';

const Cards = () => {
  return (
    <section id="cards" className="cards section">
      <div className="container">
        <div className="text-center mb-4 steps-img" data-aos="zoom-out">
          <img src={steps} alt />
        </div>
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="card-item">
              <span>01</span>
              <h4><a href className="stretched-link">Sign Up</a></h4>
              <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
            </div>
          </div>{/* Card Item */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card-item">
              <span>02</span>
              <h4><a href className="stretched-link">Repellat Nihil</a></h4>
              <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </div>
          </div>{/* Card Item */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card-item">
              <span>03</span>
              <h4><a href className="stretched-link">Ad ad velit qui</a></h4>
              <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            </div>
          </div>{/* Card Item */}
        </div>
      </div>
    </section>

  )
}

export default Cards