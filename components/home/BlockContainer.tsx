import React from 'react'

export const BlockContainer = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {props.children}
    </div>
  )
}
