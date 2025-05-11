// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';

const App = () => {
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

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
            <p className="text-gray-500">Welcome back, John! Here's what's happening with your farm today.</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Active Listings Card */}
            <div className="bg-gradient-to-r from-[#2bd876] to-[#52df8f] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-list text-xl"></i>
                </div>
                <span className="text-3xl font-bold">24</span>
              </div>
              <h3 className="font-medium">Active Listings</h3>
              <p className="text-white/70 text-sm mt-1">+3 from last week</p>
            </div>

            {/* Orders Card */}
            <div className="bg-gradient-to-r from-[#2bd876] to-[#52df8f] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-shopping-cart text-xl"></i>
                </div>
                <span className="text-3xl font-bold">18</span>
              </div>
              <h3 className="font-medium">Total Orders</h3>
              <p className="text-white/70 text-sm mt-1">5 pending delivery</p>
            </div>

            {/* Earnings Card */}
            <div className="bg-gradient-to-r from-[#2bd876] to-[#52df8f] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-dollar-sign text-xl"></i>
                </div>
                <span className="text-3xl font-bold">$2,846</span>
              </div>
              <h3 className="font-medium">Total Earnings</h3>
              <p className="text-white/70 text-sm mt-1">+12% from last month</p>
            </div>

            {/* Messages Card */}
            <div className="bg-gradient-to-r from-[#2bd876] to-[#52df8f] rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <i className="fas fa-comment-alt text-xl"></i>
                </div>
                <span className="text-3xl font-bold">12</span>
              </div>
              <h3 className="font-medium">New Messages</h3>
              <p className="text-white/70 text-sm mt-1">3 unread messages</p>
            </div>
          </div>

          {/* Recent Listings */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Recent Listings</h2>
              <button className="px-4 py-2 bg-[#2bd876] text-white rounded-xl hover:bg-[#52df8f] transition-colors cursor-pointer whitespace-nowrap !rounded-button">
                <i className="fas fa-plus mr-2"></i>
                Add New Listing
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Listing Card 1 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=fresh%20organic%20tomatoes%20on%20a%20clean%20white%20background%2C%20vibrant%20red%20color%2C%20farm%20fresh%20produce%2C%20high%20quality%20professional%20product%20photography%2C%20clean%20lighting%2C%20detailed%20texture&width=400&height=300&seq=3&orientation=landscape" 
                    alt="Organic Tomatoes" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-lg">Organic Tomatoes</h3>
                    <span className="bg-[#c1f4d7] text-[#2bd876] text-xs px-2 py-1 rounded-full font-medium">Available</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>Greenfield Farm, CA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#2bd876]">$4.99/lb</span>
                    <button className="text-[#2bd876] hover:bg-[#f6fdfa] p-2 rounded-full cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Listing Card 2 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=fresh%20organic%20carrots%20on%20a%20clean%20white%20background%2C%20vibrant%20orange%20color%2C%20farm%20fresh%20produce%2C%20high%20quality%20professional%20product%20photography%2C%20clean%20lighting%2C%20detailed%20texture&width=400&height=300&seq=4&orientation=landscape" 
                    alt="Organic Carrots" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-lg">Organic Carrots</h3>
                    <span className="bg-[#c1f4d7] text-[#2bd876] text-xs px-2 py-1 rounded-full font-medium">Available</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>Sunnydale Farms, OR</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#2bd876]">$3.49/lb</span>
                    <button className="text-[#2bd876] hover:bg-[#f6fdfa] p-2 rounded-full cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Listing Card 3 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://readdy.ai/api/search-image?query=fresh%20organic%20lettuce%20on%20a%20clean%20white%20background%2C%20vibrant%20green%20color%2C%20farm%20fresh%20produce%2C%20high%20quality%20professional%20product%20photography%2C%20clean%20lighting%2C%20detailed%20texture&width=400&height=300&seq=5&orientation=landscape" 
                    alt="Organic Lettuce" 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-medium text-lg">Organic Lettuce</h3>
                    <span className="bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded-full font-medium">Sold Out</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <span>Valley View Farm, WA</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#2bd876]">$2.99/head</span>
                    <button className="text-[#2bd876] hover:bg-[#f6fdfa] p-2 rounded-full cursor-pointer whitespace-nowrap !rounded-button">
                      <i className="fas fa-edit"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="text-[#2bd876] font-medium hover:underline cursor-pointer whitespace-nowrap !rounded-button">
                View All Listings
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Orders</h2>
                <button className="text-[#2bd876] font-medium hover:underline cursor-pointer whitespace-nowrap !rounded-button">
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Order ID</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Customer</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Date</th>
                      <th className="text-left py-3 px-2 text-sm font-medium text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-[#f6fdfa]">
                      <td className="py-3 px-2 text-sm">#ORD-7895</td>
                      <td className="py-3 px-2 text-sm">Sarah Johnson</td>
                      <td className="py-3 px-2 text-sm">Apr 28, 2025</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-[#c1f4d7] text-[#2bd876] text-xs px-2 py-1 rounded-full">Delivered</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-[#f6fdfa]">
                      <td className="py-3 px-2 text-sm">#ORD-7894</td>
                      <td className="py-3 px-2 text-sm">Michael Brown</td>
                      <td className="py-3 px-2 text-sm">Apr 27, 2025</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">Pending</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-[#f6fdfa]">
                      <td className="py-3 px-2 text-sm">#ORD-7893</td>
                      <td className="py-3 px-2 text-sm">Emily Davis</td>
                      <td className="py-3 px-2 text-sm">Apr 26, 2025</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-[#c1f4d7] text-[#2bd876] text-xs px-2 py-1 rounded-full">Delivered</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-[#f6fdfa]">
                      <td className="py-3 px-2 text-sm">#ORD-7892</td>
                      <td className="py-3 px-2 text-sm">Robert Wilson</td>
                      <td className="py-3 px-2 text-sm">Apr 25, 2025</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-[#c1f4d7] text-[#2bd876] text-xs px-2 py-1 rounded-full">Delivered</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#f6fdfa]">
                      <td className="py-3 px-2 text-sm">#ORD-7891</td>
                      <td className="py-3 px-2 text-sm">Jennifer Lee</td>
                      <td className="py-3 px-2 text-sm">Apr 24, 2025</td>
                      <td className="py-3 px-2 text-sm">
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">Pending</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Messages */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Recent Messages</h2>
                <button className="text-[#2bd876] font-medium hover:underline cursor-pointer whitespace-nowrap !rounded-button">
                  View All
                </button>
              </div>

              <div className="space-y-4 max-h-80 overflow-y-auto">
                <div className="flex items-start p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20woman%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=6&orientation=squarish" 
                    alt="Sarah Johnson" 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">Sarah Johnson</h4>
                      <span className="text-xs text-gray-500">10:35 AM</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">Hi John, I'm interested in purchasing your organic tomatoes in bulk for my restaurant. Could you let me know your availability?</p>
                  </div>
                  <span className="w-2 h-2 bg-[#2bd876] rounded-full flex-shrink-0 mt-2"></span>
                </div>

                <div className="flex items-start p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20middle-aged%20man%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=7&orientation=squarish" 
                    alt="Michael Brown" 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">Michael Brown</h4>
                      <span className="text-xs text-gray-500">Yesterday</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">Thank you for the quick delivery! The carrots were fresh and exactly as described. I'll definitely order again.</p>
                  </div>
                  <span className="w-2 h-2 bg-[#2bd876] rounded-full flex-shrink-0 mt-2"></span>
                </div>

                <div className="flex items-start p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=8&orientation=squarish" 
                    alt="Emily Davis" 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">Emily Davis</h4>
                      <span className="text-xs text-gray-500">Apr 27</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">Do you have any lettuce available? I see it's marked as sold out, but I wanted to check if you'll have more soon.</p>
                  </div>
                  <span className="w-2 h-2 bg-[#2bd876] rounded-full flex-shrink-0 mt-2"></span>
                </div>

                <div className="flex items-start p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20older%20man%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=9&orientation=squarish" 
                    alt="Robert Wilson" 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">Robert Wilson</h4>
                      <span className="text-xs text-gray-500">Apr 26</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">I'm planning a farmers market next month. Would you be interested in setting up a booth? Let me know!</p>
                  </div>
                </div>

                <div className="flex items-start p-3 rounded-xl hover:bg-[#f6fdfa] cursor-pointer">
                  <img 
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20young%20woman%20with%20a%20friendly%20smile%2C%20natural%20lighting%2C%20high%20quality%20portrait%20photograph%2C%20clean%20background%2C%20professional%20looking&width=100&height=100&seq=10&orientation=squarish" 
                    alt="Jennifer Lee" 
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-sm">Jennifer Lee</h4>
                      <span className="text-xs text-gray-500">Apr 25</span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">Just wanted to let you know that I received my order. Everything looks great! Thanks again.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

