import React from 'react';
import { BaseModalStyled } from './BaseModalStyled';

const BaseModal = ({ title, content, ...props }) => {

  return (
    <BaseModalStyled
      title={title}
        {...props}
      >
      {content}
    </BaseModalStyled>
  );
};
export default BaseModal;