import { Collapse } from "antd";
import styled from "styled-components";


export const BaseCollapseWrapper = styled(Collapse)`
    margin-bottom: 1.6rem;
    background-color: transparent;
    
    .ant-collapse-item {
        border-radius: 8px !important;
        box-shadow: 0px 4px 15px 0px #0000001A;
        background-color: #fff;
        margin-bottom: 1.6rem;
        border: none;
    }
    
    .ant-collapse-header {
        padding: 1.6rem;

        .ant-collapse-expand-icon {
            span {
                padding: 1rem;
            }
        }

        .ant-collapse-header-text {
            font-size: 1.4rem;
            color: #08133D;
            font-weight: 700;
            line-height: 2.2rem;
        }
    }
    
`;