import React, { useState } from 'react';
import { Pie, Scatter } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend, LinearScale, PointElement } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend, LinearScale, PointElement);

const AMRAuditDashboard: React.FC = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const antibioticUse = {
    labels: ['Amoxicillin', 'Ciprofloxacin', 'Azithromycin', 'Ceftriaxone'],
    datasets: [
      {
        label: 'Antibiotic Use',
        data: [35, 22, 18, 25],
        backgroundColor: ['#D32F2F', '#22d3ee', '#556B2F', '#0ea5e9'],
      },
    ],
  };

  const resistanceScatter = {
    datasets: [
      {
        label: 'Resistance Scores',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 25 },
          { x: 20, y: 18 },
          { x: 30, y: 35 },
        ],
        backgroundColor: '#D32F2F',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <h1 className="font-ubuntu text-xl font-semibold">AMR Audit Dashboard</h1>
          <a href="/" className="text-ocean-start hover:underline">Back to Home</a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="bg-white rounded-2xl shadow p-6 mb-6">
          <div className="flex items-center justify-between">
            <h2 className="font-ubuntu text-lg font-semibold">Filters</h2>
            <div className="flex items-center gap-3 text-sm">
              <input type="date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)} className="border px-2 py-1 rounded"/>
              <span>to</span>
              <input type="date" value={toDate} onChange={(e)=>setToDate(e.target.value)} className="border px-2 py-1 rounded"/>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-4">Antibiotic Use</h3>
            <Pie data={antibioticUse} />
          </div>
          <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">
            <h3 className="font-ubuntu font-semibold mb-4">Resistance Scatter</h3>
            <Scatter data={resistanceScatter} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Audit Logs</h3>
            <ul className="text-sm space-y-2">
              <li>2025-10-20 12:23 - ShareLogged patient P-102 → Org K-12</li>
              <li>2025-10-20 11:10 - AMRLogged antibiotic CIP evidence E-45</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <button className="bg-brand-olive text-white px-3 py-2 rounded">Export CSV</button>
              <button className="bg-brand-red text-white px-3 py-2 rounded">Export PDF</button>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Data Integrity Flags</h3>
            <p className="text-sm text-gray-600">All audit entries hashed on-chain ✅</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-ubuntu font-semibold mb-3">Top Antibiotics</h3>
            <ul className="text-sm space-y-2">
              <li>Amoxicillin (35%)</li>
              <li>Ciprofloxacin (22%)</li>
              <li>Ceftriaxone (25%)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AMRAuditDashboard;



