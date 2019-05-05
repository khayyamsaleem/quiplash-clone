import React from 'react';
import { Carousel } from 'react-bootstrap';

export default class ImageCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.handleSelect = this.handleSelect.bind(this);
      this.state = {
        index: 0,
        direction: null,
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
      const { index, direction } = this.state;

      return (
        <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} style={{width:"400px", height:"300px"}}>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./slide1.jpg')} alt="First slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./slide2.jpg')} alt="Second slide"/>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={require('./slide3.jpg')} alt="Third slide"/>
          </Carousel.Item>
        </Carousel>
      );
    }
}
