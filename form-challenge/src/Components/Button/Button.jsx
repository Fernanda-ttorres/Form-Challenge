import React from 'react'
import { DivButton } from './Button.styled'

const Button = ({nameDiv, id, type, image, text, imageTwo, onClick}) => {
  return (
    <DivButton className={nameDiv}>
        <button className={id} id={id} type={type} onClick={onClick}>
            <img src={image}/> {text} <img src={imageTwo}/>
        </button>
    </DivButton>
  )
}

export default Button