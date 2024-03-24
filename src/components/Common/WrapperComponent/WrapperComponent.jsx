
import React from 'react'
import { WrapperComponentStyled } from './WrapperComponentStyled'

const WrapperComponent = ({ children }) => {
  return (
    <WrapperComponentStyled>
      {children}
    </WrapperComponentStyled>
  )
}

export default WrapperComponent