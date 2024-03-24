import React from "react";
import { BaseTableStyled } from "./BaseTableStyled";

const BaseTable = ({ data, columns, ...props }) => {
  return (
    <BaseTableStyled className="KCCRGMSLQP" columns={columns} dataSource={data} {...props} />
  );
};

export default BaseTable;
