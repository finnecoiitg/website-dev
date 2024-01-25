import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './car.css'

function Car() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 2000, min: 1500 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 1500, min: 512 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 512, min: 232 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 232, min: 0 },
          items: 1
        }
      };
  return (
    <div className='carousel-box'>
        {/* <div className='carousel-content'>Leading the Way in Project Innovation</div> */}
        <div className='carousel-block'>
        <Carousel responsive={responsive}>
            <div className='block'>
                <div className='block-title'>Card Title</div>
                <image><img src=''></img></image>
                <div className='block-head'>Europe Street beat</div>
                <div className='block-body'>We completed our project and research with some of the leading companies like JP Morgan and Sprinkler to attain the best product. The project revolves around the use of Blockchain system to attain the best possible result.</div>
                <div className='block-button' href=''>read more →</div>
            </div>
            <div className='block'>
                <div className='block-title'>Card Title</div>
                <image><img src=''></img></image>
                <div className='block-head'>Mining Village case</div>
                <div className='block-body'>We completed our project and research with some of the leading companies like JP Morgan and Sprinkler to attain the best product. The project revolves around the use of Blockchain system to attain the best possible result.</div>
                <div className='block-button' href=''>read more →</div>
            </div>
            <div className='block'>
                <div className='block-title'>Card Title</div>
                <image><img src=''></img></image>
                <div className='block-head'>Mining Village case</div>
                <div className='block-body'>We completed our project and research with some of the leading companies like JP Morgan and Sprinkler to attain the best product. The project revolves around the use of Blockchain system to attain the best possible result.</div>
                <div className='block-button' href=''>read more →</div>
            </div>
            <div className='block'>
                <div className='block-title'>Card Title</div>
                <image><img src=''></img></image>
                <div className='block-head'>Europe Street beat</div>
                <div className='block-body'>We completed our project and research with some of the leading companies like JP Morgan and Sprinkler to attain the best product. The project revolves around the use of Blockchain system to attain the best possible result.</div>
                <div className='block-button' href=''>read more →</div>
            </div>
        </Carousel>
        </div>
    </div>
  )
}

export default Car
