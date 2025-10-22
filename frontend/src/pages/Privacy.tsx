import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Privacy: React.FC = () => {
  const [ack, setAck] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-ubuntu text-3xl font-semibold mb-4">Privacy Policy</h1>
      <div className="prose max-w-none space-y-4">
        <p>At TibaLife, your privacy and trust are at the heart of everything we do...</p>
        <h2>1. Information We Collect</h2>
        <ul>
          <li>Personal identification data</li>
          <li>Health information and clinical results</li>
          <li>Usage data and security analytics</li>
        </ul>
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>Secure access to records</li>
          <li>Support auditing and analytics</li>
          <li>Anonymized insights</li>
        </ul>
        <h2>3. Data Security and Storage</h2>
        <p>Encrypted servers; blockchain for audit immutability; role-based access.</p>
        <h2>4. Data Sharing and Interoperability</h2>
        <p>FHIR & openEHR standards; consent-driven sharing.</p>
        <h2>5. Your Rights</h2>
        <p>Access, correct, delete, withdraw consent, request history.</p>
        <h2>6. Updates to This Policy</h2>
        <p>Policy may be updated; continued use implies acceptance.</p>
        <h2>Acknowledgment and Consent</h2>
      </div>
      <label className="flex items-center gap-2 mt-4 text-sm"><input type="checkbox" checked={ack} onChange={e=>setAck(e.target.checked)}/> I acknowledge and accept the Privacy Policy</label>
      <button disabled={!ack} onClick={()=>navigate('/')} className={`mt-4 px-4 py-2 rounded text-white ${ack? 'bg-brand-olive':'bg-gray-300 cursor-not-allowed'}`}>Accept & Continue</button>
    </div>
  );
}

export default Privacy;



