import React from 'react'
import { Container } from 'react-bootstrap'

const CTA = ({ctaText}) => {
  return (
    <>
      <Container>
        <p>{ctaText}</p>
      </Container>
    </>
  )
}

export default CTA
