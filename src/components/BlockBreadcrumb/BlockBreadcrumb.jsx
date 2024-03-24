import BaseBreadcrumb from "../Common/BaseBreadcrumb/BaseBreadcrumb"
import WrapperComponent from "../Common/WrapperComponent/WrapperComponent"
import { BlockBreadcrumbStyled } from "./BlockBreadcrumbStyled"

const BlockBreadcrumb = ({ children, items, backgroundColor }) => {
  return (
    <BlockBreadcrumbStyled $backgroundColor={backgroundColor}>
        <WrapperComponent>
            <BaseBreadcrumb
                items={items}
            />

            {children}
        </WrapperComponent>
    </BlockBreadcrumbStyled>
  )
}

export default BlockBreadcrumb