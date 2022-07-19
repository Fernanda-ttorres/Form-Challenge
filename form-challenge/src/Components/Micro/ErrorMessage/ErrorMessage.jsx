import React from 'react'
import { ErrorStyled } from './ErrorMessage.styled'

const ErrorMessage = ({id, text, errors}) => {
  return errors[id] && <ErrorStyled className={"error"} >{text}</ErrorStyled>
}

export default ErrorMessage