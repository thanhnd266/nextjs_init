import { Select } from "antd";
import styled from "styled-components";

export const BaseSelectStyled = styled(Select)`
    margin-left: 0.8rem;
    min-width: ${(props) => props.$width ? props.$width : 14}rem;
    
    .ant-select-selector {
        border: 1px solid #DCDCDC !important;
        border-radius: 8px !important;
        padding: 0 1.6rem !important;
        height: 4rem !important;

        .ant-select-selection-item {
            display: flex;
            align-items: center;
        }
    }
`;