import React from 'react'
import { registerVevComponent } from '@vev/react'

export const Addon = ({ className, children, invertedColors, horizontal, vertical }: any) =>
  <div
    className={className}
    children={children}
    style={{
      filter: invertedColors ? 'invert(1)' : undefined,
      transform: `scale(${horizontal ? '-1' : '1'}, ${vertical ? '-1' : '1'})`
    }}
  />

registerVevComponent(Addon, {
  name: 'Flip Flop',
  type: 'action',
  props: [
    {
      name: 'horizontal',
      type: 'boolean',
      title: 'Flip horizontal'
    },
    {
      name: 'vertical',
      type: 'boolean',
      title: 'Flip vertical'
    },
    {
      name: 'invertedColors',
      type: 'boolean',
      title: 'Invert colours'
    }
  ]
})
