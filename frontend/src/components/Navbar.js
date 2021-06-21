import { Link } from "react-router-dom";
import styled from "styled-components";
// TODO: make it re-usable
//  add login here

const NavStyled = styled.nav`
  background-color: #aaaaaa;
  .link {
    * {
      margin: 12px;
    }
  }
`;
const Navbar = () => {
  return (
    <NavStyled>
      <div className="link">
        <Link to="/login">Login (Test)</Link>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
    </NavStyled>
  );
};

export default Navbar;
