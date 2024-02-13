'use client'
import JsonView from '@uiw/react-json-view'
import React from 'react'

type Props = {}

function JSONViewer({ value, enableClipboard = false, collapsed = 1 }: any) {
  return (
    value && <JsonView value={value} enableClipboard={enableClipboard} collapsed={collapsed} />
  )
}

export default JSONViewer