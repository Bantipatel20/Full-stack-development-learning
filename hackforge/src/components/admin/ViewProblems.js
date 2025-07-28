// src/components/admin/ViewProblems.js
import React, { useState } from 'react';

const ViewProblems = () => {
    // Sample problems data (in a real application, this would likely come from an API)
    const [problems, setProblems] = useState([
        { id: 1, title: 'Two Sum', description: 'Find two numbers that add up to a target.' },
        { id: 2, title: 'Add Two Numbers', description: 'Add two numbers represented by linked lists.' },
        { id: 3, title: 'Longest Substring Without Repeating Characters', description: 'Find the longest substring without repeating characters.' },
    ]);

    const handleDelete = (id) => {
        // Remove the problem by filtering out the one with the matching id
        const updatedProblems = problems.filter(problem => problem.id !== id);
        setProblems(updatedProblems); // Update the state with the new list of problems
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4">View Problems</h1>
            <ul className="space-y-4">
                {problems.map((problem) => (
                    <li key={problem.id} className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
                        <div>
                            <h2 className="font-semibold">{problem.title}</h2>
                            <p className="text-gray-600">{problem.description}</p>
                        </div>
                        <button 
                            onClick={() => handleDelete(problem.id)} 
                            className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition duration-300"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewProblems;
