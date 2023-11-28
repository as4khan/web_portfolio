import React from 'react'
import Resume from '../../Assets/Areeb_Khan_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Have A Conversation</a>
    </div>
  )
}

export default CTA
