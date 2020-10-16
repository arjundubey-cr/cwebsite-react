import React from 'react'
import PropTypes from 'prop-types'

const SectionHeadingHS = (props) => {
  const heading = props.heading
  return (
    <div>
      <h1 className='section-heading'>heading</h1>
    </div>
  )
}

SectionHeadingHS.propTypes = {
  name: String,
}

export default SectionHeadingHS
