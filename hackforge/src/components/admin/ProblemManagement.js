// src/components/admin/ProblemManagement.js
import React, { useState } from 'react';

const ProblemManagement = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(''); // State for problem category
    const [testCases, setTestCases] = useState([{ input: '', output: '' }]);

    const handleTestCaseChange = (index, field, value) => {
        const newTestCases = [...testCases];
        newTestCases[index][field] = value;
        setTestCases(newTestCases);
    };

    const addTestCase = () => {
        setTestCases([...testCases, { input: '', output: '' }]);
    };

    const removeTestCase = (index) => {
        const updatedTestCases = testCases.filter((_, i) => i !== index);
        setTestCases(updatedTestCases);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send the new problem and test cases to the backend
        console.log('Problem submitted:', { title, description, category, testCases });
        setTitle('');
        setDescription('');
        setCategory('');
        setTestCases([{ input: '', output: '' }]);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">Problem Management</h1>
            <form onSubmit={handleSubmit} className="mt-4 bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block mb-2">Problem Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="border rounded w-full p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Category</label>
                    <select 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        className="border rounded w-full p-2" 
                        required
                    >
                        <option value="" disabled>Select Category</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div className="mb-4">
                    <h2 className="text-2xl font-semibold">Test Cases</h2>
                    {testCases.map((testCase, index) => (
                        <div key={index} className="border p-4 mb-4 rounded">
                            <div className="mb-2">
                                <label className="block mb-1">Input</label>
                                <textarea
                                    value={testCase.input}
                                    onChange={(e) => handleTestCaseChange(index, 'input', e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block mb-1">Output</label>
                                <textarea
                                    value={testCase.output}
                                    onChange={(e) => handleTestCaseChange(index, 'output', e.target.value)}
                                    className="border rounded w-full p-2"
                                    required
                                />
                            </div>
                            <button 
                                type="button" 
                                onClick={() => removeTestCase(index)} 
                                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                            >
                                Remove Test Case
                            </button>
                        </div>
                    ))}
                    <button type="button" onClick={addTestCase} className="bg-green-500 text-white p-2 rounded">
                        Add Another Test Case
                    </button>
                </div>
                <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                    Add Problem
                </button>
            </form>
        </div>
    );
};

export default ProblemManagement;
