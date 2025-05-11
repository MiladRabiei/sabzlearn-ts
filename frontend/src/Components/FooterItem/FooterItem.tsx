import React from 'react'

import './FooterItem.css'
type FooterItemProps={
  title:string
  children:React.ReactNode
}
export default function FooterItem({ title, children }:FooterItemProps) {
  return (
    <div className="col-4">
    <div className="footer-widgets__item">
      <span className="footer-widgets__title">
        {title}
      </span>

      {children}
    </div>
  </div>
  )
}
