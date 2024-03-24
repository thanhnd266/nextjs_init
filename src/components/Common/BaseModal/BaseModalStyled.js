import { Modal } from "antd";
import styled from "styled-components";


export const BaseModalStyled = styled(Modal)`
    .ant-modal-mask {
        z-index: 20 !important;
    }

    .ant-modal-wrap {
        z-index: 20 !important;

        .ant-modal-body {
            padding: 2rem 0;
        }
    }

    .ant-modal-content {
        border-radius: 16px !important;

        .ant-modal-footer {
            border: none;
        }
    }

`