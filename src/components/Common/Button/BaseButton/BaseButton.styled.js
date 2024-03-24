import { Button } from "antd";
import styled from "styled-components";


export const BaseButtonWrapper = styled(Button)`
    border-radius: 8px;
    background-color: ${(props) => props.$background ? props.$background : props.theme.colors.primary};
    padding: 0.9rem 1.6rem;
    color: ${(props) => props.$textColor ? props.$textColor : '#fff'};
    border: none;
    height: unset;

    &:hover, &:focus {
        background-color: ${(props) => props.$background ? props.$background : props.theme.colors.primary};;
        color: ${(props) => props.$textColor ? props.$textColor : '#fff'};
        opacity: 0.9;
    }

    .RHSDKYBMQD {
        font-weight: 700;
    }
`;