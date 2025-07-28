// src/components/admin/SubmissionTracking.js
import React, { useState } from 'react';

const submissions = [
  { id: 1, student: '23cs058', problem: 'Two Sum', status: 'Passed', score: 100 },
  { id: 2, student: '23cs060', problem: 'Add Two Numbers', status: 'Failed', score: 50 },
  { id: 3, student: '23cs042', problem: 'Longest Substring', status: 'Passed', score: 90 },
  { id: 4, student: '23cs058', problem: 'Add Two Numbers', status: 'Passed', score: 80 },
  { id: 5, student: '23cs060', problem: 'Two Sum', status: 'Passed', score: 60 },
];

const SubmissionTracking = () => {
  const uniqueProblems = [...new Set(submissions.map((submission) => submission.problem))];
  const [selectedProblem, setSelectedProblem] = useState(uniqueProblems[0] || '');

  const handleProblemChange = (e) => {
    setSelectedProblem(e.target.value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">Submission Tracking</h1>

      {/* Dropdown to select a problem */}
      <div className="mb-6">
        <label className="block mb-2 text-lg font-semibold text-gray-700">Select a Problem:</label>
        <select 
          value={selectedProblem}
          onChange={handleProblemChange}
          className="border rounded w-full p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        >
          {uniqueProblems.map((problem) => (
            <option key={problem} value={problem}>
              {problem}
            </option>
          ))}
        </select>
      </div>

      {/* Display submissions for the selected problem */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">{selectedProblem}</h2>
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Student</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {submissions
              .filter((submission) => submission.problem === selectedProblem)
              .map((submission) => (
                <tr key={submission.id} className="hover:bg-gray-100 transition duration-150">
                  <td className="border p-2">{submission.student}</td>
                  <td className="border p-2">{submission.status}</td>
                  <td className="border p-2">{submission.score}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionTracking;
