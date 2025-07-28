// src/components/admin/StudentManagement.js
import React, { useState } from 'react';
import * as XLSX from 'xlsx'; // Import the xlsx library

const StudentManagement = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'Banti', email: '23cs058@example.com', username: 'banti', password: 'password123', solved: 10, avgScore: 85 },
        { id: 2, name: 'Dhaval', email: '23cs060@example.com', username: 'dhaval', password: 'password123', solved: 5, avgScore: 70 },
        { id: 3, name: 'Shashan', email: '23cs042@example.com', username: 'shashan', password: 'password123', solved: 8, avgScore: 90 }
    ]);

    const [newStudent, setNewStudent] = useState({
        name: '',
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = students.length + 1; // Assign a new ID
        setStudents([...students, { id, ...newStudent, solved: 0, avgScore: 0 }]); // Add the new student
        setNewStudent({ name: '', email: '', username: '', password: '' }); // Reset the form
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
            const data = event.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet); // Convert the first sheet to JSON

            // Process each row in the Excel file to add students
            jsonData.forEach((student) => {
                const { Name, Email, Username, Password } = student; // Adjust these keys based on your Excel column names
                if (Name && Email && Username && Password) {
                    const id = students.length + 1; // Assign a new ID
                    setStudents((prev) => [...prev, { id, name: Name, email: Email, username: Username, password: Password, solved: 0, avgScore: 0 }]);
                }
            });
        };

        reader.readAsBinaryString(file); // Read the file as binary string
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">Student Management</h1>

            {/* Form to Add New Student */}
            <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Add New Student</h2>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={newStudent.name}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={newStudent.email}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={newStudent.username}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={newStudent.password}
                        onChange={handleChange}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add Student
                </button>
            </form>

            {/* File Upload for Bulk Student Addition */}
            <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">Upload Students from Excel</h2>
                <input
                    type="file"
                    accept=".xlsx, .xls"
                    onChange={handleFileChange}
                    className="border rounded w-full p-2"
                />
            </div>

            {/* Table to Display Students */}
            <table className="mt-4 w-full border bg-white rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Email</th>
                        <th className="border p-2">Username</th>
                        <th className="border p-2">Password</th>
                        <th className="border p-2">Problems Solved</th>
                        <th className="border p-2">Average Score</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td className="border p-2">{student.name}</td>
                            <td className="border p-2">{student.email}</td>
                            <td className="border p-2">{student.username}</td>
                            <td className="border p-2">{student.password}</td> {/* Displaying password for demo purposes; consider removing this in production */}
                            <td className="border p-2">{student.solved}</td>
                            <td className="border p-2">{student.avgScore}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentManagement;
