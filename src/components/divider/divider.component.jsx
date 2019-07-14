import React from 'react'
import './divider.styles.scss'
export default function Divider({height,...otherProps}) {
  return (
    <div className="divider" 
    style={{height,...otherProps}}></div>

  )
}
