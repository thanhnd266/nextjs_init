
import { Tabs } from 'antd'
import React from 'react'

const BaseTab = ({ items, ...props }) => {
  return (
    <Tabs
      items={items}
      {...props}
    />
  )
}

export default BaseTab