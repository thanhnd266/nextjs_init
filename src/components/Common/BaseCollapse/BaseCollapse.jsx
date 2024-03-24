

import React from 'react'
import { BaseCollapseWrapper } from './BaseCollapseStyled'
import { Collapse } from 'antd';
import { DownOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

// Đừng dùng component này vì nó không dùng được chung nữa =))
const BaseCollapse = ({ items, onRedirect, onGetHeader, onGetItem, isRegistered, ...props }) => {
  const handleRedirect = (sectionIndex, lessonIndex, lesson) => {
    if(onRedirect) {
      onRedirect(sectionIndex, lessonIndex, lesson)
    }
  }

  return (
    <BaseCollapseWrapper 
      bordered={false}
      className="site-collapse-custom-collapse"
      expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0} />}
      {...props}
    >
      {items?.length > 0 && items.map((el, index) => {
        return (
          <Panel header={onGetHeader ? onGetHeader(el, index) : ""} className="site-collapse-custom-panel" key={index}>
            {el?.lstCourseLessonDto?.length > 0 && el?.lstCourseLessonDto?.map((lesson, i) => (
                <div
                  onClick={() => (isRegistered || lesson.isPreview) ? handleRedirect(index, i, lesson) : () => {}} 
                  key={i}
                >
                  {onGetItem ? onGetItem(lesson, i, index) : ""}
                </div>
            ))}
          </Panel>
        )
      })}
    </BaseCollapseWrapper>
  )
}

export default BaseCollapse