import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import './cover.css';

const Styles = styled.div` 
  .carousel-indicators > li {    
    padding: 5px;
    cursor: pointer;
  }

  .carousel-item {
    height: 80vh;
    width: 205vh;
    z-index: -1;
  }
`
const Cover = () => {
  return (
    <div className='cont'>
      <Styles>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="slider-main.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Fast and Affordable Service</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="auto-paint.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>High Quality</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="blue-paint.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Get Quote</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Styles>
    </div>
  )
}


export default Cover;