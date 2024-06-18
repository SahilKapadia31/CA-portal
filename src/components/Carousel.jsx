import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const CarouselSection = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img src="public/banner.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="public/banner-1.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="public/banner-2.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="public/banner-3.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="public/banner-4.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img src="public/banner-5.jpg" className='w-100' style={{ height: "66dvh" }} alt="" />
                    <Carousel.Caption>
                        <h1 className='text-darkblue fw-bold'>Welcome To Company Name</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSection