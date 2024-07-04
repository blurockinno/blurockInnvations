import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ManageUser = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Admin");
  const [status, setStatus] = useState("Active");
  const [softwareName, setSoftwareName] = useState("Order Management System");
  const [isLoding, setIsLoading] = useState(false);
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("/api/v1/user/all");

        const { users } = response.data;
        setAllUser(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllUsers();
  }, [isLoding]); //

  const handleDeleteUser = (userId) => {
    // // Implement delete functionality (can be API call or local state update)
    // const updatedUsers = users.filter((user) => user.id !== userId);
    // setUsers(updatedUsers);
  };

  const openAddUserModel = () => {
    setIsModelOpen((prev) => !prev);
  };

  // handle for add user
  const handleAddUser = async () => {
    console.log(fullName, email, role, status);
    try {
      const response = await axios.post("/api/v1/user/sign-up", {
        fullName,
        email,
        role,
        companyId: currentUser.companyId,
        status,
        softwareName,
      });

      const { success, message } = response.data;
      if (success) {
        console.log(message);
        setIsLoading(true);
      }
    } catch (error) {
      console.error("There was an error adding the user!", error);
    } finally {
      // Clear the form
      setFullName("");
      setEmail("");
      setRole("Admin");
      setStatus("Active");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end p-2">
        <button
          onClick={openAddUserModel}
          className="flex bg-blue-700 items-center text-white px-4"
        >
          <Plus /> Add user
        </button>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="border text-black">
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
                Access to
              </th>
              <th className="py-3 px-4 uppercase font-semibold text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {isModelOpen && (
              <tr className="hover:bg-gray-100">
                <td className="py-3 px-4  border-gray-200">
                  <label htmlFor="fullname">Name</label>
                  <input
                    type="text"
                    id="fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </td>
                <td className="py-3 px-4  border-gray-200">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </td>
                <td className="py-3 px-4  border-gray-200">
                  <label htmlFor="role">Role</label>
                  <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                  </select>
                </td>
                <td className="py-3 px-4  border-gray-200">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td className="py-3 px-4  border-gray-200">
                  <label htmlFor="status">Status</label>
                  <select
                    id="status"
                    value={softwareName}
                    onChange={(e) => setSoftwareName(e.target.value)}
                  >
                    <option value="Order Management System">
                      Order Management System
                    </option>
                    <option value="Employee Management System">
                      Employee Management System
                    </option>
                  </select>
                </td>
                <td className="py-3 px-4  border-gray-200">
                  <button
                    className="text-blue-600 hover:text-blue-800 mr-2"
                    onClick={handleAddUser}
                  >
                    Add User
                  </button>
                </td>
              </tr>
            )}
            {allUser.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 text-center">
                <td className="py-3 px-4  border-gray-200">{user?.fullName}</td>
                <td className="py-3 px-4  border-gray-200">{user?.email}</td>
                <td className="py-3 px-4  border-gray-200">{user?.role}</td>
                <td className="py-3 px-4  border-gray-200">{user?.status}</td>
                <td className="py-3 px-4  border-gray-200">
                  {user?.softwareName}
                </td>
                <td className="py-3 px-4  border-gray-200">
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
