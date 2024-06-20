import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUsers = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    getUsers();
  };
  return (
    <div
      className="
        relative overflow-x-auto
        "
    >
      <Link to="/users/add" className="rounded-full  bg-green-700 px-3 py-2">
        Add New User
      </Link>
      <table
        className="
            w-full mt-8 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400
            "
      >
        <thead
          className="
            text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400    
            "
        >
          <tr>
            <th className="px-6 py-3">No</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.uuid}
              className="
                 bg-white border-b dark:bg-gray-800 dark:border-gray-700
                 "
            >
              <td className="px-6 py-4">{index + 1}</td>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="
                                rounded-full  bg-blue-700 px-3 py-2
                                "
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUsers(user.uuid)}
                  className="
                                rounded-full  bg-red-700 px-3 py-2
                                "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
