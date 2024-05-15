import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import './Navbar.css'

export const Navbar = () => {
  const { isLoggedIn} = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">FCS</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/Services"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedIn ?  <li>
                <NavLink to="/logout"> Logout </NavLink>
              </li> : <> <li>
                <NavLink to="/login"> Login </NavLink>
              </li>
              <li>
                <NavLink to="/register"> SignUp </NavLink>
              </li></>}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};