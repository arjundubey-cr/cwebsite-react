import React from 'react'
import { Button } from 'react-bootstrap'
import upArrow from '../assets/logo/arrow.svg'
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const UpScrollButton = () => {
  return (
    <Button
      variant='secondary'
      onClick={scrollToTop}
      className='btn rounded-circle position-fixed fixed-bottom mr-2 mb-3 button-top'
      href='#'>
      <img src={upArrow} alt='Scroll to top' />
    </Button>
  )
}

export default UpScrollButton
