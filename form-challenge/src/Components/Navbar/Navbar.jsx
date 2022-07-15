
import { NavStyled } from "./Navbar.styled";
export const Navbar = () => {
  return (
    <NavStyled>
      <div className="navbar-div">
        <nav className="nav">
         <div className="tab" id="true"><p>Basic</p></div>
         <div className="tab" id="false"><p>Social</p></div>
         <div className="tab" id="false"><p>Certificates</p></div>
        </nav>
      </div>
    </NavStyled>
  );
};

export default Navbar;
