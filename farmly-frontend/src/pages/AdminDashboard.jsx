import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  console.log("✅ AdminDashboard rendered"); // Mount check

  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("📣 useEffect triggered with selectedSection:", selectedSection);
    if (selectedSection === "users") {
      console.log("➡️ selectedSection is 'users', calling fetchUsers()");
      fetchUsers();
    }
  }, [selectedSection]);

  const fetchUsers = async () => {
    try {
      console.log("🚀 fetchUsers() started...");
      setLoading(true);
      const response = await axios.get('/api/admin/users');
      console.log("✅ Users fetched from backend:", response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.error("❌ Error in fetchUsers:", err);
      setError("Error fetching users");
      setLoading(false);
    }
  };

  const renderSection = () => {
    console.log("🧭 Rendering section:", selectedSection);

    switch (selectedSection) {
      case "dashboard":
        return (
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              {/* Replace these with real stats later */}
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Total Farmers</h3>
                <p className="text-2xl font-bold text-[#2bd876]">120</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Total Buyers</h3>
                <p className="text-2xl font-bold text-[#52df8f]">80</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Total Listings</h3>
                <p className="text-2xl font-bold text-[#79e7a8]">150</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold">Total Orders</h3>
                <p className="text-2xl font-bold text-[#9aedbe]">200</p>
              </div>
            </div>
          </div>
        );

      case "users":
        return (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Users</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-600">{error}</p>
            ) : users.length > 0 ? (
              <table className="w-full table-auto">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Role</th>
                    <th className="py-2 px-4 text-left">Email</th>
                    <th className="py-2 px-4 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td className="py-2 px-4">{user.name}</td>
                      <td className="py-2 px-4">{user.role}</td>
                      <td className="py-2 px-4">{user.email}</td>
                      <td className="py-2 px-4">
                        <button className="text-blue-600 hover:text-blue-800">Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No users found.</p>
            )}
          </div>
        );

      // Other cases (listings, orders)
      case "listings":
      case "orders":
        return <p>{selectedSection} management coming soon...</p>;

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#f6fdfa]">
      {/* Sidebar */}
      <div className="w-64 bg-[#2bd876] text-white p-6">
        <div className="text-center text-2xl font-semibold mb-8">Farmly Admin</div>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => {
                console.log("🟢 Clicked Dashboard");
                setSelectedSection("dashboard");
              }}
              className="hover:bg-[#52df8f] p-4 block text-left w-full text-lg"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                console.log("🟡 Clicked Manage Users");
                setSelectedSection("users");
              }}
              className="hover:bg-[#52df8f] p-4 block text-left w-full text-lg"
            >
              Manage Users
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                console.log("🔵 Clicked Manage Listings");
                setSelectedSection("listings");
              }}
              className="hover:bg-[#52df8f] p-4 block text-left w-full text-lg"
            >
              Manage Listings
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                console.log("🟣 Clicked Order Management");
                setSelectedSection("orders");
              }}
              className="hover:bg-[#52df8f] p-4 block text-left w-full text-lg"
            >
              Order Management
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <p className="text-sm text-gray-500 mb-2">📌 Current section: {selectedSection}</p>
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
