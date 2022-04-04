import React from "react";

import nft1 from "../../../assets/img/nft1.jpg";
import nft2 from "../../../assets/img/nft2.png";
import nft3 from "../../../assets/img/nft3.png";
import nft4 from "../../../assets/img/nft-4.jpg";
import nft5 from "../../../assets/img/nft5.jpg";
import nft6 from "../../../assets/img/nft6.png";


import { Carousel } from "react-bootstrap";

import './nft.style.css';


const Nft = () => {
  return (
    <div className="container nft-container mt-5">
      <Carousel >
  <Carousel.Item>
     <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft1} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft2} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft3} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
            </div>
     
  </Carousel.Item>
  <Carousel.Item>

            <div className="row">
              <div className="col-md-4">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft4} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft5} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 clearfix d-none d-md-block">
                <div className="card mb-2">
                  <img className="card-img-top" src={nft6} />
                  <div className="card-body">
                    <h4 className="card-title">Nft name</h4>
                    <p className="card-text">
                   Nft description
                    </p>
                    <a className="btn btn-primary primary-button">Buy</a>
                  </div>
                </div>
              </div>
            </div>
  
  </Carousel.Item>
  
</Carousel>
 
 
    </div>
  );
};

export default Nft;
