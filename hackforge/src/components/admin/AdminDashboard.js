// src/components/admin/AdminDashboard.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiOutlineClipboardList, HiUserGroup, HiChartBar, HiCog } from 'react-icons/hi'; // Import the cog icon for settings
import ViewProblems from './ViewProblems'; // Import the new component

const AdminDashboard = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <nav className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
                <button 
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300"
                >
                    Logout
                </button>
            </nav>
            <p className="mt-2 text-gray-700 text-center">Welcome to the admin panel. Here you can manage different aspects of the HackForge platform.</p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center">
                    <HiOutlineClipboardList className="text-4xl text-blue-600 mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Manage Problems</h2>
                        <p className="text-gray-600">Add, edit, or delete coding problems.</p>
                        <Link to="/admin/problems" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700">
                            Go to Problems
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center">
                    <HiUserGroup className="text-4xl text-blue-600 mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Manage Students</h2>
                        <p className="text-gray-600">View and manage student information.</p>
                        <Link to="/admin/students" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700">
                            Go to Students
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center">
                    <HiChartBar className="text-4xl text-blue-600 mr-4" />
                    <div>
                        <h2 className="text-xl font-semibold">Track Submissions</h2>
                        <p className="text-gray-600">Monitor submissions for coding challenges.</p>
                        <Link to="/admin/submissions" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700">
                            Go to Submissions
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 flex items-center">
                    <HiCog className="text-4xl text-blue-600 mr-4" /> {/* Cog icon for settings */}
                    <div>
                        <h2 className="text-xl font-semibold">Settings</h2>
                        <p className="text-gray-600">Manage application settings.</p>
                        <Link to="/admin/settings" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-300 hover:bg-blue-700">
                            Go to Settings
                        </Link>
                    </div>
                </div>
            </div>
            {/* Add the ViewProblems component to the dashboard */}
            <ViewProblems />
        </div>
    );
};

export default AdminDashboard;
