import React from 'react'

export default props => (
  <img
    src={props.src}
    alt=""
    className={"Img " + props.className}
  />
)