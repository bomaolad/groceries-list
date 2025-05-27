import React from 'react'

const Footer = () => {
    const year= new Date().getFullYear()
  return (
    <div>
      <p>Copyright &copy; {year}</p>
    </div>
  )
}

export default Footer
