import React from 'react';
import { useNavigate } from 'react-router-dom';

const Ethics: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-ubuntu text-3xl font-semibold mb-4">Data Ethics & Governance</h1>
      <div className="prose max-w-none space-y-4">
        <ol className="list-decimal pl-6">
          <li>Ethical Data Stewardship — guided by WHO Digital Health Ethics and Kenya DPA (2019).</li>
          <li>Transparency and Accountability — open reporting and regular audits.</li>
          <li>Responsible Use of Technology — blockchain/AI only to enhance integrity and safety.</li>
          <li>Inclusion and Fairness — reduce inequalities, design for all users.</li>
          <li>Continuous Ethical Oversight — annual reviews aligned with SDG3.</li>
        </ol>
      </div>
      <button onClick={()=>navigate('/')} className="mt-6 px-4 py-2 rounded text-white bg-brand-red">Back to Home</button>
    </div>
  );
}

export default Ethics;



