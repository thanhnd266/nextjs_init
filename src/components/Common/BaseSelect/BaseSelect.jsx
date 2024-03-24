import { BaseSelectStyled } from "./BaseSelectStyled"

const BaseSelect = ({ children, width, options, ...props }) => {
  return (
    <BaseSelectStyled
      $width={width}
      options={options}
      {...props}
    >
        {children}
    </BaseSelectStyled>
  )
}

export default BaseSelect