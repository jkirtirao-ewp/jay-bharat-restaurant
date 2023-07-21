/* eslint-disable no-unused-vars */
import React from 'react'
import GallerySection from './components/GallerySection'

import './Gallery.css'
const Gallery = () => {
  return (
    <>
    <div className='galley-hero-banner'>
    <div className='galley-hero-container'>
    <h4 className='heading-4'>Take a look</h4>
    <h1 className='heading-1'>Our Gallery</h1>
    <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/>
    blanditiis perspiciatis asperiores et sapiente</p>
    <button className='main-btn'>Explore more</button>
    </div>
    </div>
    <section className='gallery-img-container'>
    <GallerySection/>

    </section>

    </>
  )
}

export default Gallery