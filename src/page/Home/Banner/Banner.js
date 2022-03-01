import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/image/banner1.jpg';
import banner2 from '../../../images/image/banner2.jpg';
import banner3 from '../../../images/image/banner3.jpg';


const Banner = () => {

    return (
        <Carousel>

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={700}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>


                </Carousel.Caption>
            </Carousel.Item>
            
        </Carousel>
    );
};

export default Banner;