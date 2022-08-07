import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../../redux/modules/authContext";

const MainNavigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authContext.isLoggedIn);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header>
      <NavLink to="/">React Auth</NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink to="/auth">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
