import { Button } from "antd";
import React from "react";
import { BaseButtonWrapper } from "./BaseButton.styled";

const BaseButton = ({ 
    icon, 
    text,
    children,
    className,
    backGroundColor,
    textColor,
    ...props
}) => {
  return (
    <BaseButtonWrapper
      className={className}
      $background={backGroundColor}
      $textColor={textColor}
      {...props}
    >
        {icon && <span>{icon}</span>}
        {text && <span className="RHSDKYBMQD">{text}</span>}
        {children}
    </BaseButtonWrapper>
  );
};

export default BaseButton;
