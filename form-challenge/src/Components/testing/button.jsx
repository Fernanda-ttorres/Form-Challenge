
import React from "react";
import { AuthContext } from "../../App";


function Button(props) {
    
    const { name } = React.useContext(AuthContext);
    const [page, setPage] = name;
    
    const changePage = (x) => {
        setPage(x-1)
    }
  
    


    return (
      <button onClick={() => {
        changePage(props.page)
        props.fun(props.page -1)
    }
    }>{props.text}</button>
    );
  }
  
  export default Button;
  