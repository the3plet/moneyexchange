import React from 'react'

type Props = {}

const Carousel = (props: Props) => {
  return (
    <div className=' p-8 overflow-hidden flex justify-center'>
        <img src='/ads.jpg' className=' rounded-3xl' width="90%"/>
    </div>
  )
}

export default Carousel