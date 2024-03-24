import { Table } from "antd";
import styled from "styled-components";


export const BaseTableStyled = styled(Table)`
    border-radius: 6px;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr;

    .ant-table-title {
      padding: 1.2rem;
    }

    .ant-table-container {
      border: 1px solid;

      .ant-table-thead {
        .ant-table-cell {
          border-bottom: 1px solid;
          font-weight: 700;
        }
      }
    }

    .ant-table-tbody {
      .ant-table-placeholder {
        z-index: 0 !important;
      }
      .ant-typography {
        color: #21cf3c;
      }
      .ant-table-row {
        .ant-table-cell {
          border-bottom: 1px solid;
        }
      }
    }
`;