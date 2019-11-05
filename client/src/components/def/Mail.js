import React from 'react'

export default props => (
  <a
    href={"mailto:" + props.address}
    className={"Mail " + props.className}
  >
    {props.address}
  </a>
)