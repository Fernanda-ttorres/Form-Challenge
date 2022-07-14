import React from 'react'

const ErrorMessage = ({id, text, errors}) => {
  return errors[id] && <p>{text}</p>
}

export default ErrorMessage