import { useEffect, useState } from "react";
import { api } from "../api.js";
import { loadingClass, errorClass } from "../styles/common.js";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await api.get("/admin-api/users");
        if (res.status === 200) {
          setUsers(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const toggleUserBlock = async (userId, currentStatus) => {
    try {
      // Toggle the boolean
      const action = currentStatus ? "block" : "unblock";
      if (!window.confirm(`Are you sure you want to ${action} this user?`)) return;

      const res = await api.put("/admin-api/block-user", { userId, isUserActive: !currentStatus });
      if (res.status === 200) {
        // Update user state locally
        setUsers(users.map(u => u._id === userId ? { ...u, isUserActive: !currentStatus } : u));
      }
    } catch (err) {
      alert(err.response?.data?.message || "Action failed");
    }
  };

  if (loading) return <p className={loadingClass}>Loading users...</p>;
  if (error) return <p className={errorClass}>{error}</p>;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-[#e8e8ed]">
      <h3 className="text-xl font-semibold mb-4">Registered Users</h3>
      {users.length === 0 ? (
        <p className="text-[#a1a1a6] text-sm py-4">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#e8e8ed] text-sm text-[#6e6e73]">
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-b border-[#f5f5f7] hover:bg-[#fcfcfc]">
                  <td className="py-3 px-4 font-medium">{user.firstName} {user.lastName}</td>
                  <td className="py-3 px-4 text-[#6e6e73]">{user.email}</td>
                  <td className="py-3 px-4">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold uppercase">
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${user.isUserActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {user.isUserActive ? "Active" : "Blocked"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button 
                      onClick={() => toggleUserBlock(user._id, user.isUserActive)}
                      className={`text-sm px-4 py-1.5 rounded-full transition ${user.isUserActive ? 'text-red-600 bg-red-50 hover:bg-red-100' : 'text-green-600 bg-green-50 hover:bg-green-100'}`}
                    >
                      {user.isUserActive ? "Block" : "Unblock"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UsersList;