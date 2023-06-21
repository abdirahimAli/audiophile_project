import React from 'react'
import img4 from '/image-best-gear.jpg'

const Human = () => {
  return (
    <article className='Human-container'>
     
       
        <div className='humanimg-Text'>    
               
        <div className='humanimgText-header'><h1> BRING YOU THE <br/> <span className='Best'>BEST</span>AUDIO GEAR </h1></div>
        <div className='humanimgText-paragraph'>
        <p className='commonitems-paragraph'> Located at the heart of New York City. Audiophile is the premier<br/>
        store for high end headphones,earphones,speakers,and audio<br/>
        accessories. We have a large showroom and luxury <br/>demonstration rooms available for
        you to browse and<br/> experience a wide range of our products. Stop by
        our store to<br/> meet some of the fantastic people who make Audiophile the<br/>
        best place to buy portable audio equipment. </p>
        </div>
        </div>


      
        <img className='humanimgimg' src={img4}  /> 

                

    </article>


  )
}

export default Human