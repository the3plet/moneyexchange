import React from 'react'

type Props = {}

function Notification({}: Props) {
  return (
    <div className='bg-red-500 bottom-0 inset-x-0 fixed h-10'>
        <h1 className='text-2xl scroll animate-scroll text-white'>A new notification regarding currency exchange has been released </h1>
    </div>
  )
}

export default Notification