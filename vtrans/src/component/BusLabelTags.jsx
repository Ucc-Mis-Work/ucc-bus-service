import React from 'react'

export default function BusLabelTags({color,label}) {
  return (
    <div className='inline-grid mr-2 mb-2'>
        <div className='flex items-center gap-2 '>
            <div style={{background:color,opacity:0.7}} className='size-6 rounded-md'/>
            <h1 className='text-sm'>{label}</h1>
        </div>
    </div>
  )
}
