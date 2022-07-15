import React from 'react'
import { DivButton } from './Button.styled'
import { AuthContext } from "../Containers/Page/Page";



const Button = ({nameDiv, id, type, image, text, imageTwo , pageState , unLockNav}) => {

  const { name } = React.useContext(AuthContext); //page authcontext
  const [page,setPage] = name; //page state

  

  const changePage = (pageState) => {
    setPage(pageState)
    unLockNav()
  }


  return (
    <DivButton className={nameDiv}>
        <button className={id} id={id} type={type}  onClick={() => changePage(pageState)}>
            <img src={image}/> {text} <img src={imageTwo}/>
        </button>
    </DivButton>
  )
}

export default Button