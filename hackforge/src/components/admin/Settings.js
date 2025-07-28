// src/components/admin/Settings.js
import React from 'react';

const Settings = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Settings</h1>
            <p className="text-lg text-center text-gray-700 mb-6">Manage application settings here.</p>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Change Admin Password</h2>
                <form className="mt-4">
                    <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-600">New Password</label>
                        <input 
                            type="password" 
                            className="border rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm text-gray-600">Confirm Password</label>
                        <input 
                            type="password" 
                            className="border rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-blue-400" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Update Password
                    </button>
                </form>
            </div>
        </div>
    );
};
export default Settings;
