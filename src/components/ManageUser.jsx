import { Plus } from "lucide-react";
import { useState } from "react";

const ManageUser = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  // Example user data (can be fetched from API or passed as props)
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "User",
      status: "Active",
    },
  ]);

  const handleDeleteUser = (userId) => {
    // Implement delete functionality (can be API call or local state update)
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };

  const handleOnAddUser = () => {};

  const openAddUserModel = () => {
    setIsModelOpen((prev) => !prev);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
        <button
          onClick={openAddUserModel}
          className="flex bg-blue-700 items-center text-white px-4"
        >
          <Plus /> Add user
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Role
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Status
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {isModelOpen && (
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b border-gray-200">
                  <label htmlFor="fullname">Name</label>
                  <input type="text" id="fullname" />
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <label htmlFor="role">Role</label>
                  <select id="role">
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <select id="role">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    Add User
                  </button>
                </td>
              </tr>
            )}
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="py-3 px-4 border-b border-gray-200">
                  {user.name}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {user.email}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {user.role}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  {user.status}
                </td>
                <td className="py-3 px-4 border-b border-gray-200">
                  <button className="text-blue-600 hover:text-blue-800 mr-2">
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
