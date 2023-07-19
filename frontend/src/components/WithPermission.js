import React from 'react'

export default function WithPermission(props) {
  const {roleRequired, children} = props;
  
  return (
    <>{roleRequired ? children : <></>}</>
  )
}
