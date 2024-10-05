import React, { useState, useEffect, useRef } from "react";

const UserTable = ({ users, handleAction, currentPage, usersPerPage }) => {
  // Get the current users based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="flex flex-col justify-center w-full overflow-x-auto">
      <table className="w-full table-auto bg-white border border-gray-300 text-sm mx-auto">
        <thead className="text-xs">
          <tr>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Profile Image
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Name
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Email
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Role
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Status
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Registered On
            </th>
            <th className="py-3 px-4 bg-[#201e43] text-white uppercase font-semibold text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-300 hover:bg-gray-100"
            >
              <td className="py-2 px-4 text-center">
                <img
                  src={user.profileImage}
                  alt={user.username}
                  className="w-10 h-10 rounded-full object-cover mx-auto"
                />
              </td>
              <td className="py-2 px-4 text-left text-gray-700">
                {user.username}
              </td>
              <td className="py-2 px-4 text-left text-gray-700">
                {user.email}
              </td>
              <td className="py-2 px-4 text-left text-gray-700">{user.role}</td>
              <td className="py-2 px-4 text-left text-gray-700">
                {user.status}
              </td>
              <td className="py-2 px-4 text-left text-gray-700">
                {user.registrationDate}
              </td>
              <td className="py-2 px-4 text-center">
                <ActionDropdown userId={user.id} handleAction={handleAction} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ActionDropdown = ({ userId, handleAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        className="bg-[#201e43] text-white py-1 px-3 rounded-md focus:outline-none "
        onClick={() => setIsOpen(!isOpen)}
      >
        ...
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => {
              handleAction("view", userId);
              setIsOpen(false);
            }}
          >
            View Profile
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => {
              handleAction("delete", userId);
              setIsOpen(false);
            }}
          >
            Delete User
          </button>
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            onClick={() => {
              handleAction("ban", userId);
              setIsOpen(false);
            }}
          >
            Ban User
          </button>
        </div>
      )}
    </div>
  );
};

// Example usage of UserTable component
const AdminDashboard = () => {
  // Example data for 20 users
  const users = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    username: `User${index + 1}`,
    email: `user${index + 1}@example.com`,
    role: index % 2 === 0 ? "Admin" : "Player",
    status: index % 2 === 0 ? "Active" : "Inactive",
    registrationDate: `Tue Sep 17 2024`,
    profileImage: "https://via.placeholder.com/150", // Example profile image
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  const handleAction = (action, userId) => {
    console.log(`Action: ${action}, User ID: ${userId}`);
    // Implement the actual logic for the action
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-gray-50 min-h-screen w-full  pl-20">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-[#201e43]">
          User Management Dashboard
        </h1>
        {/* Pagination */}
        <div className="flex justify-between gap-5">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-[#508c9b] text-white py-1 px-4 rounded-sm w-fit"
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
            className="bg-[#508c9b] text-white py-1 px-4  rounded-sm w-fit"
          >
            Next
          </button>
        </div>
      </div>

      <UserTable
        users={users}
        handleAction={handleAction}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        paginate={paginate}
      />
    </div>
  );
};

export default AdminDashboard;
