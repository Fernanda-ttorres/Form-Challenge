import React from 'react'
import { ErrorStyled } from './ErrorMessage.styled'

const ErrorMessage = ({id, text, errors}) => {
  return errors[id] && <ErrorStyled>{text}</ErrorStyled>
}

export default ErrorMessage