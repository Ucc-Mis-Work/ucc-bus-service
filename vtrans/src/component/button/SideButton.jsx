import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SideButton({title,icon,link}) {
  return (
    <Link to={link}>
        <button className='w-full p-3 flex items-center justify-center gap-4 bg-gray-100 rounded-lg mb-2 hover:bg-red-400 '>
            <FontAwesomeIcon icon={icon} className='text-primary'/>
            <h1 className='hidden group-hover:block text-sm font-medium text-gray-800 group-hover:text-black'>{title}</h1>
        </button>
    </Link>
  )
}
