import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const PatientDashboard: React.FC = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Health Progress Index',
        data: [62, 64, 66, 70, 72, 75],
        borderColor: '#0ea5e9',
        backgroundColor: 'rgba(34,211,238,0.2)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <h1 className="font-ubuntu text-xl font-semibold">Patient Dashboard</h1>
          <a href="/" className="text-ocean-start hover:underline">Back to Home</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-ubuntu text-lg font-semibold">Health Progress</h2>
              <div className="flex items-center gap-3 text-sm">
                <input type="date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} className="border px-2 py-1 rounded"/>
                <span>to</span>
                <input type="date" value={toDate} onChange={(e)=>setToDate(e.target.value)} className="border px-2 py-1 rounded"/>
              </div>
            </div>
            <Line data={data} />
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="font-ubuntu text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-brand-red text-white py-2 rounded">Share Records</button>
              <button className="w-full bg-brand-olive text-white py-2 rounded">Manage Consents</button>
              <button className="w-full bg-ocean-start text-white py-2 rounded">Download CSV</button>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Recent Documents</h3>
            <ul className="text-sm space-y-2">
              <li className="flex justify-between"><span>Lab Results - CBC</span><a className="text-ocean-start" href="#">View</a></li>
              <li className="flex justify-between"><span>Doctor Note - Follow-up</span><a className="text-ocean-start" href="#">View</a></li>
              <li className="flex justify-between"><span>Prescription - Amoxicillin</span><a className="text-ocean-start" href="#">View</a></li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Data Integrity Flags</h3>
            <ul className="text-sm space-y-2">
              <li>All records verified on-chain ✅</li>
              <li>No conflicting entries detected ✅</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientDashboard;


