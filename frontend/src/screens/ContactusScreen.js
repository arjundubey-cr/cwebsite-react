import React from 'react'

const ContactusScreen = () => {
  return (
    <div>
      <div className='section-heading text-center'>Contact Info</div>
      <hr className='section-underline' />
      <div className='container contact-info-page'>
        <address className='font-weight-bold'>
          Faculty Of Engineering & Technology <br />
          University of Lucknow ,New Campus Rd <br />
          Sultanpur Village, <br />
          Jankipuram, Lucknow, <br />
          Uttar Pradesh, 226021, India
        </address>
        <a
          class='text-decoration-none description font-weight-bold'
          href='tel:+917991200653'>
          7991200653
        </a>{' '}
        <br />
        <a
          class='text-decoration-none description font-weight-bold'
          href='tel:+918090196096'>
          8090196096
        </a>
      </div>
      <div className='section-sub-sub-heading container text-center'>
        Website Feedback
      </div>
      <div className='description container'>
        We welcome your feedback about this website. Click here to fill out the
        feedback form.
      </div>
    </div>
  )
}

export default ContactusScreen
