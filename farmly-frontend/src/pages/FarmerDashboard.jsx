// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
 const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
const [showNotifications, setShowNotifications] = useState(false);
const [showUserMenu, setShowUserMenu] = useState(false);

const [listings, setListings] = useState([]);
const [showForm, setShowForm] = useState(false);
const [formData, setFormData] = useState({
  title: '',
  description: '',
  category: '',
  quantity: 1,
  price: '',
  unit: 'kg',
  images: [''],
});

  const token = localStorage.getItem('token'); // or use context/auth setup
  const BASE_URL = 'http://localhost:5000'; // Replace with your backend URL


  const [user, setUser] = useState(null);
  const farmerId = localStorage.getItem('farmerId'); // or get from auth token/session

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/farmer/profile/${farmerId}`);
        setUser(res.data);
      } catch (err) {
        console.error('Error fetching user:', err);
      }
    };

    if (farmerId) fetchUser();
  }, [farmerId]);  



  const fetchListings = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/farmer/produce`,{
        headers: { Authorization: `Bearer ${token}` },
      });
      setListings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${BASE_URL}/api/farmer/produce`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormData({ title: '', description: '', category: '', quantity: 1, price: '', unit: 'kg', images: [''] });
      setShowForm(false);
      fetchListings(); // Refresh listings
    } catch (err) {
      console.error('Add listing failed:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
};



  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setShowUserMenu(false);
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
    setShowNotifications(false);
  };

  return (
    <div className="flex h-screen bg-[#f6fdfa] font-['Inter',sans-serif] text-gray-800">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-md flex flex-col h-full fixed left-0 top-0 z-10">
        {/* Logo */}
        <div className="flex items-center justify-center h-20 border-b border-gray-100">
          <h1 className="text-2xl font-bold text-[#2bd876]">Farmly</h1>
          {/* <span className="text-gray-500 text-sm ml-2">The Future of Farming, Linked</span> */}
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-6 px-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => handleSidebarItemClick('dashboard')}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSidebarItem === 'dashboard' 
                    ? 'bg-[#2bd876] text-white font-medium' 
                    : 'hover:bg-[#f6fdfa] hover:text-[#2bd876]'
                }`}
              >
                <i className="fas fa-home mr-3"></i>
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              
            </li>
            <li>
              <button 
                onClick={() => handleSidebarItemClick('listings')}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSidebarItem === 'listings' 
                    ? 'bg-[#2bd876] text-white font-medium' 
                    : 'hover:bg-[#f6fdfa] hover:text-[#2bd876]'
                }`}
              >
                <i className="fas fa-list mr-3"></i>
                <span>My Listings</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSidebarItemClick('messages')}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSidebarItem === 'messages' 
                    ? 'bg-[#2bd876] text-white font-medium' 
                    : 'hover:bg-[#f6fdfa] hover:text-[#2bd876]'
                }`}
              >
                <i className="fas fa-comment-alt mr-3"></i>
                <span>Messages</span>
                <span className="ml-auto bg-[#2bd876] text-white text-xs px-2 py-1 rounded-full">3</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSidebarItemClick('orders')}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSidebarItem === 'orders' 
                    ? 'bg-[#2bd876] text-white font-medium' 
                    : 'hover:bg-[#f6fdfa] hover:text-[#2bd876]'
                }`}
              >
                <i className="fas fa-shopping-cart mr-3"></i>
                <span>Orders</span>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleSidebarItemClick('settings')}
                className={`flex items-center w-full px-4 py-3 rounded-xl transition-all duration-200 cursor-pointer whitespace-nowrap !rounded-button ${
                  activeSidebarItem === 'settings' 
                    ? 'bg-[#2bd876] text-white font-medium' 
                    : 'hover:bg-[#f6fdfa] hover:text-[#2bd876]'
                }`}
              >
                <i className="fas fa-cog mr-3"></i>
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
            <img 
              //src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20farmer%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=1&orientation=squarish" 
              alt="User Profile" 
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="ml-3">
              <p className="font-medium text-sm">John Farmer</p>
              
            </div>
            <i className="fas fa-chevron-right ml-auto text-gray-400 text-xs"></i>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-72 flex-1 flex flex-col min-h-screen">
        {/* Top Navigation Bar */}
        <header className="h-20 bg-white shadow-sm flex items-center px-8 sticky top-0 z-10">
          {/* Search Bar */}
          <div className="relative w-2/5">
            <input 
              type="text" 
              placeholder="Search products, orders, customers..." 
              className="w-full pl-10 pr-4 py-2 rounded-xl border-none bg-[#f6fdfa] focus:outline-none focus:ring-2 focus:ring-[#2bd876] text-sm"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          {/* Right Section */}
          <div className="ml-auto flex items-center space-x-6">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={toggleNotifications}
                className="relative p-2 rounded-full hover:bg-[#f6fdfa] cursor-pointer whitespace-nowrap !rounded-button"
              >
                <i className="fas fa-bell text-gray-600"></i>
                <span className="absolute top-0 right-0 w-2 h-2 bg-[#2bd876] rounded-full"></span>
              </button>
              
              
            </div>

            {/* Messages */}
           

            {/* User Menu */}
             <div className="relative">
      <button 
        onClick={toggleUserMenu}
        className="flex items-center cursor-pointer whitespace-nowrap !rounded-button"
      >
        <img 
          src={user?.profileImage || "/default-profile.png"} // optional profile image
          alt="User Profile" 
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="ml-2 font-medium text-sm">{user?.name || "Loading..."}</span>
        <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${showUserMenu ? 'transform rotate-180' : ''}`}></i>
      </button>
      
      {showUserMenu && (
        <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg py-2 z-20">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="font-medium">{user?.name}</p>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>
          <ul>
            <li className="px-4 py-2 hover:bg-[#f6fdfa] cursor-pointer">
              <a href="#" className="flex items-center">
                <i className="fas fa-user mr-3 text-gray-500"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-[#f6fdfa] cursor-pointer">
              <a href="#" className="flex items-center">
                <i className="fas fa-cog mr-3 text-gray-500"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li className="px-4 py-2 hover:bg-[#f6fdfa] cursor-pointer">
              <a href="#" className="flex items-center">
                <i className="fas fa-question-circle mr-3 text-gray-500"></i>
                <span>Help Center</span>
              </a>
            </li>
            <li className="border-t border-gray-100 mt-2">
              <a href="#" className="flex items-center px-4 py-2 hover:bg-[#f6fdfa] text-red-500">
                <i className="fas fa-sign-out-alt mr-3"></i>
                <span>Sign Out</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
          </div>
        </header>

        {/* Main Dashboard Content */}
        <main className="flex-1 p-8">
  {activeSidebarItem === 'dashboard' && (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-500">Welcome back, John! Here's what's happening with your farm today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Cards here */}
      </div>
    </div>
  )}

  {activeSidebarItem === 'listings' && (
    <div>
      <div className="mb-8">


            <div className="flex items-center justify-between mb-6">
            
              <button
               onClick={() => setShowForm(true)}
               className="px-4 py-2 bg-[#2bd876] text-white rounded-xl hover:bg-[#52df8f] transition-colors cursor-pointer whitespace-nowrap">
               <i className="fas fa-plus mr-2"></i>
                Add New Listing
              </button>
            </div>

 {showForm && (
        <div className="fixed inset-0 bg-[#fdfdfd] bg-opacity-50 flex justify-center items-center z-50">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 w-full max-w-md space-y-4 shadow-lg">
            <h3 className="text-lg font-bold">New Produce Listing</h3>
            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="w-full border p-2 rounded" required />
            <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full border p-2 rounded" />
            <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category (e.g., Vegetable)" className="w-full border p-2 rounded" />
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} placeholder="Quantity" className="w-full border p-2 rounded" required />
            <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full border p-2 rounded" required />
            <input type="text" name="unit" value={formData.unit} onChange={handleChange} placeholder="Unit (e.g., kg, piece)" className="w-full border p-2 rounded" />
            <input type="text" name="images" value={formData.images[0]} onChange={(e) => setFormData({ ...formData, images: [e.target.value] })} placeholder="Image URL" className="w-full border p-2 rounded" />
            <div className="flex justify-between">
              <button type="submit" className="bg-[#2bd876] text-white px-4 py-2 rounded">Submit</button>
              <button onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2">Cancel</button>
            </div>
          </form>
        </div>



      )}

          </div>
      <h1 className="text-2xl font-bold mb-6">My Produce Listings</h1>
      {listings.length === 0 ? (
        <p>No listings found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div key={listing._id} className="bg-white rounded-xl shadow p-4">
              <h2 className="text-lg font-semibold mb-2">{listing.title}</h2>
              <p className="text-sm text-gray-600">{listing.description}</p>
              <p className="mt-2 font-medium text-[#2bd876]">
                ₹{listing.price}/{listing.unit}
              </p>
              <p className="text-sm text-gray-500">Qty: {listing.quantity}</p>
              {listing.images?.[0] && (
                <img src={listing.images[0]} alt="Produce" className="w-full h-40 object-cover mt-3 rounded" />
              )}
            </div>
          ))}
          
        </div>
      )}
      
    </div>
    
  )}
  
</main>



        
      </div>
    </div>
  );
};

export default App;

