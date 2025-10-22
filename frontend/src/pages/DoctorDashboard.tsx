import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const DoctorDashboard: React.FC = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const patientsServed = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Patients Served',
        data: [18, 22, 19, 25, 27, 12],
        backgroundColor: '#22d3ee',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <h1 className="font-ubuntu text-xl font-semibold">Doctor Dashboard</h1>
          <a href="/" className="text-ocean-start hover:underline">Back to Home</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-ubuntu text-lg font-semibold">Hospital Performance</h2>
              <div className="flex items-center gap-3 text-sm">
                <input type="date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} className="border px-2 py-1 rounded"/>
                <span>to</span>
                <input type="date" value={toDate} onChange={(e)=>setToDate(e.target.value)} className="border px-2 py-1 rounded"/>
              </div>
            </div>
            <Bar data={patientsServed} />
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-ubuntu text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-brand-red text-white py-2 rounded">Upload Record</button>
              <button className="w-full bg-brand-olive text-white py-2 rounded">Share with Patient</button>
              <a href="/audit" className="block text-center bg-ocean-start text-white py-2 rounded">Open AMR Audit</a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Repeat Visits</h3>
            <p className="text-sm text-gray-600">Last 30 days: 31%</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Average Improvement</h3>
            <p className="text-sm text-gray-600">+12% on key outcomes</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;


