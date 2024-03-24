import { PrimaryButtonStyled } from "./PrimaryButtonStyled"

function PrimaryButton(props) {
    const { children } = props
    return (
        <PrimaryButtonStyled>{children}</PrimaryButtonStyled>
    )
}

export default PrimaryButton