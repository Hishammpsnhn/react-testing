import React from 'react'
import { GreatProps } from './greet.types'

function Great(props: GreatProps) {
  return (
    <>
      <div>Hello {props.name ? props.name : 'Guest'}</div>
    </>
  )
}

export default Great
