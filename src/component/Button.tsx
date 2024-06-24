import React from 'react'
import '../App.css'

interface btn {
    children : JSX.Element | string;
    className? : string,
    onClick ?:()=> void;
}

const Button = ({children,className,onClick}:btn) => {
    console.log(`btn class`,className)
  return (
    <button type = "submit" className={className} onClick={onClick}><span>{children}</span></button>
  )
}

export default Button
// "btn-4"