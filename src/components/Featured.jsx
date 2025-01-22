import React from 'react'
import cards4 from '../assets/img/cards-4.png';
import cards2 from '../assets/img/cards-2.png';
import cards6 from '../assets/img/cards-6.png';

const Featured = () => {
  return (
    <section id="featured" className="featured section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Save your time to using SoftLand</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="col-md-4">
            <div className="card">
              <div className="img">
                <img src={cards4} alt className="img-fluid" />
                <div className="icon"><i className="bi bi-hdd-stack" /></div>
              </div>
              <h2 className="title">Explore Your Team</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>{/* End Card Item */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="card">
              <div className="img">
                <img src={cards2} alt className="img-fluid" />
                <div className="icon"><i className="bi bi-brightness-high" /></div>
              </div>
              <h2 className="title">Digital Whiteboard</h2>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>{/* End Card Item */}
          <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="card">
              <div className="img">
                <img src={cards6} alt className="img-fluid" />
                <div className="icon"><i className="bi bi-calendar4-week" /></div>
              </div>
              <h2 className="title">Design To Development</h2>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
              </p>
            </div>
          </div>{/* End Card Item */}
        </div>
      </div>
    </section>

  )
}

export default Featured