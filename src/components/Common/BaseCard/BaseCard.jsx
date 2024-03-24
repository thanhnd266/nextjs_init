

import React from 'react'
import { BaseCardStyled } from './BaseCardStyled'
import GradientButton from '../Button/GradientButton/GradientButton'

const BaseCard = ({ children, image, videoUrl, link, btnText, handleClick, isButtonDisabled, ...props }) => {

  const getMediaComponent = () => {
    if(image) {
      return <img alt="" src={image} />
    }
    if(videoUrl) {
      return (
        <iframe width="100%" height={196} src={videoUrl} frameBorder="0" allowFullScreen ng-show="showvideo"></iframe>
      )
    }
  }

  return (
    <BaseCardStyled  
        cover={getMediaComponent()}
        {...props}
    >
        {children}
        <GradientButton
            title={btnText}
            onClick={handleClick}
            disabled={isButtonDisabled}
            {...props}
        />
    </BaseCardStyled>
  )
}

export default BaseCard