import React from 'react'

export default props => (
  <a
    href={"tel:" + props.number}
    className={"Tel " + props.className}
  >
    {props.number}
  </a>
)