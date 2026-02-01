import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SocialSpan({logo , link}) {
  return (
    <NavLink to={link} target='_blank' className='w-40 h-40 bg-gray-500 gray-border d-flex align-items-center justify-content-center rounded-3 gray200-text'>
       <i className={`fa-brands ${logo}`}></i> 
    </NavLink>
  )
}
