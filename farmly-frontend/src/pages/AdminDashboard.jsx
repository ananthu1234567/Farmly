import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {

  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedSection === "users") {
      fetchUsers();
    }
  }, [selectedSection]);

  const [stats, setStats] = useState({
  totalUsers: 0,
  totalProduce: 0,
  totalOrders: 0
});

useEffect(() => {
  if (selectedSection === "dashboard") {
    fetchDashboardStats();
  }
}, [selectedSection]);

  // Fetch dashboard stats from the backend

const fetchDashboardStats = async () => {
  try {
    setLoading(true);
    const response = await axios.get('/api/admin/dashboard/stats');
    
    // Set the stats in state
    setStats(response.data);
    setLoading(false);
  } catch (err) {
    console.error("❌ Error in fetchDashboardStats:", err);
    setError("Error fetching dashboard stats");
    setLoading(false);
  }
};



  // Fetch users from the backend

  const fetchUsers = async () => {
  try {
    console.log("🚀 fetchUsers() started...");
    setLoading(true);
    const response = await axios.get('http://localhost:5000/api/admin/users');

    console.log("✅ Users fetched from backend:", response.data);

    // Check if the data is an array
    if (Array.isArray(response.data)) {
      setUsers(response.data);
      console.log("Users set in state:", response.data);
    } else {
      setError("Unexpected response format.");
    }
    setLoading(false);
  } catch (err) {
    console.error("❌ Error in fetchUsers:", err);
    setError("Error fetching users");
    setLoading(false);
  }
};


  const renderSection = () => {

    switch (selectedSection) {
      case "dashboard":
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Total Users</h3>
          <p className="text-2xl font-bold text-[#2bd876]">{stats.totalUsers}</p>
        </div>
        
        
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Total Produce</h3>
          <p className="text-2xl font-bold text-[#79e7a8]">{stats.totalProduce}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Total Orders</h3>
          <p className="text-2xl font-bold text-[#9aedbe]">{stats.totalOrder}</p>
        </div>
      </div>
    </div>
  );


      case "users":
        return (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Users</h2>
    {loading ? (
      <p>Loading users...</p>
    ) : error ? (
      <p className="text-red-600">{error}</p>
    ) : users.length > 0 ? (
      <table className="w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Role</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Status</th> {/* Added Status column */}
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}> {/* Use user._id as the unique key */}
              <td className="py-2 px-4">{user.name}</td>
              <td className="py-2 px-4">{user.role}</td>
              <td className="py-2 px-4">{user.email}</td>
              <td className="py-2 px-4">
                <span
                  className={`${
                    user.isActive ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                  } py-1 px-3 rounded-full text-sm`}
                >
                  {user.isActive ? "Active" : "Inactive"}
                </span>
              </td>
              <td className="py-2 px-4">
                <button className="text-blue-600 hover:text-blue-800">
                  Edit
                </button>
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



      case "listings":
      case "orders":
        return <p>{selectedSection} management coming soon...</p>;

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-[#f6fdfa]">
      <div className="w-64 bg-[#2bd876] text-white p-6">
        <div className="text-center text-2xl font-semibold mb-8">Farmly Admin</div>
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => {
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
               
                setSelectedSection("orders");
              }}
              className="hover:bg-[#52df8f] p-4 block text-left w-full text-lg"
            >
              Order Management
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-8 overflow-y-auto">
       
        {renderSection()}
      </div>
    </div>
  );
};

export default AdminDashboard;
