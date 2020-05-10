import React from 'react'

export const Border = (props: {
  borderColor?: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <div
      style={{
        border: `solid 4px ${props.borderColor || '#ddd'}`,
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <div style={{ fontSize: '25px', paddingBottom: '10px' }}>
        {props.title}
      </div>

      {props.children}
    </div>
  )
}
