import React from 'react'

export default function PrimaryButton({title,type,handleclick}) {
  return (
    <button type={type} onClick={handleclick} className='px-3 bg-red-500 text-white rounded-lg py-2'>
      {title}
    </button>
  )
}
