import React from 'react'
import { Button } from 'react-bootstrap'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const UpScrollButton = () => {
  return (
    <Button
      onClick={scrollToTop}
      className='btn btn-dark rounded-circle position-fixed fixed-bottom mr-2 mb-3 button-top'
      href='#'>
      <i className='fas fa-arrow-up'></i>
    </Button>
  )
}

export default UpScrollButton
