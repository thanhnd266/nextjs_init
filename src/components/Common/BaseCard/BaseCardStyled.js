import { Card } from "antd";
import styled from "styled-components";


export const BaseCardStyled = styled(Card)`
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 0px #0000001A;
    max-width: 39.7rem;
    height: fit-content;

    iframe {
        border-radius: 8px;
    }
`;