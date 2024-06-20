// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <center>
        <NavLink>
          <p>Navbar</p>
        </NavLink>
      </center>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Navbar;
