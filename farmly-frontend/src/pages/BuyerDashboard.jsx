// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState , useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const placeholderImage = "https://placehold.co/400x300?text=No+Image";



   const [listings, setListings] = useState([]);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [produce, setProduce] = useState([]);
  const BASE_URL = "http://localhost:5000"; // Adjust this to your backend URL

  const handleSidebarItemClick = () => {
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

    useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/buyer/listings`);
        setListings(res.data);
      } catch (err) {
        console.error("Failed to fetch listings", err);
      }
    };
    fetchListings();
  }, []);

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
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg py-2 z-20">
                  <h3 className="px-4 py-2 font-medium border-b border-gray-100">Notifications</h3>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="px-4 py-3 hover:bg-[#f6fdfa] border-b border-gray-100">
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-[#c1f4d7] flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-shopping-cart text-[#2bd876]"></i>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm">New order received</p>
                          <p className="text-xs text-gray-500">15 minutes ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#f6fdfa] border-b border-gray-100">
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-[#c1f4d7] flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-comment-alt text-[#2bd876]"></i>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm">Sarah sent you a message</p>
                          <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-[#f6fdfa]">
                      <div className="flex">
                        <div className="w-10 h-10 rounded-full bg-[#c1f4d7] flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-star text-[#2bd876]"></i>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm">You received a new review</p>
                          <p className="text-xs text-gray-500">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-2 text-center border-t border-gray-100">
                    <button className="text-[#2bd876] text-sm font-medium cursor-pointer whitespace-nowrap !rounded-button">View all notifications</button>
                  </div>
                </div>
              )}
            </div>

            {/* Messages */}
            <button className="relative p-2 rounded-full hover:bg-[#f6fdfa] cursor-pointer whitespace-nowrap !rounded-button">
              <i className="fas fa-comment-alt text-gray-600"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#2bd876] rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={toggleUserMenu}
                className="flex items-center cursor-pointer whitespace-nowrap !rounded-button"
              >
                <img 
                  //src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20farmer%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=2&orientation=squarish" 
                  alt="User Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="ml-2 font-medium text-sm">John Farmer</span>
                <i className={`fas fa-chevron-down ml-2 text-xs transition-transform duration-200 ${showUserMenu ? 'transform rotate-180' : ''}`}></i>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-xl shadow-lg py-2 z-20">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="font-medium">John Farmer</p>
                    <p className="text-sm text-gray-500">john@farmly.com</p>
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
  <div className="mb-8">
    <h1 className="text-2xl font-bold mb-2">Dashboard</h1>
    <p className="text-gray-500">Welcome back, John! Here's what’s available on the marketplace.</p>
  </div>

  <div className="mb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.length === 0 ? (
  <p>No produce available.</p>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {listings.map(item => (
      <div key={item._id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden">
          <img
  src={item.imageUrl || placeholderImage}
  alt={item.name}
  className="w-full h-full object-cover object-top"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = placeholderImage;
  }}
/>
        </div>
        <div className="p-5">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-medium text-lg">{item.name}</h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              item.availability === 'Available' ? 'bg-[#c1f4d7] text-[#2bd876]' : 'bg-gray-200 text-gray-500'
            }`}>
              {item.availability}
            </span>
          </div>
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>{item.farmer?.location || 'Unknown Location'}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#2bd876]">${item.price}/lb</span>
            <button className="text-[#2bd876] hover:bg-[#f6fdfa] p-2 rounded-full cursor-pointer whitespace-nowrap !rounded-button">
              Buy
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
)}

    </div>
  </div>
</main>


      </div>
    </div>
  );
};

export default App;

