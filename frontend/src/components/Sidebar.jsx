// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice.js";

const Sidebar = () => {
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
      <aside>
        <p>Ini Sidebar</p>
        <br />
        <p>General</p>
        <ul>
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag />
              Product
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <ul>
              <li>
                <NavLink to={"/users"}>
                  <IoPerson />
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
        <ul>
          <li>
            <button onClick={logout} className="rounded-none bg-red-500">
              <IoLogOut />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
