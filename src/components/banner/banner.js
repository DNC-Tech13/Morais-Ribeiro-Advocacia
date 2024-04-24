'use client' 
import { Children, useState } from 'react'
import './banner.scss'

 
export default function Banner(props) {

  if(props.type !== 'full') {
    return (
      <section className='hero-sect-half' style={{backgroundImage: `url('${props.bannerImg}')`}} >
        <div className='hero-container'>
          {props.children}
        </div>
      </section>
    )
  }
  return (
    <section className='hero-sect-full' style={{backgroundImage: `url('${props.bannerImg}')`}}>
      <div className='hero-container'>
        {props.children}
      </div>
    </section>
  )
}
