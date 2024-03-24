import { Breadcrumb } from "antd";
import React from "react";
import { BaseBreadcrumbWrapper } from "./BaseBreadcrumbStyled";
import Link from "next/link";

const BaseBreadcrumb = ({
  items,
  ...props
}) => {
  return (
    <BaseBreadcrumbWrapper>
      <Breadcrumb
        {...props} 
      >
        {items?.length > 0 && items.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item?.link ? (
              <Link href={item?.link}>{item?.title}</Link>
            ) : (
              <span>{item?.title}</span>
            )}
            
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </BaseBreadcrumbWrapper>
  );
};

export default BaseBreadcrumb;
