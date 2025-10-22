import React from 'react';
import { useNavigate } from 'react-router-dom';

const Disclaimer: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-ubuntu text-3xl font-semibold mb-4">Legal Disclaimer</h1>
      <div className="prose max-w-none space-y-4">
        <p>Information and services are for informational and auditing purposes only; not medical advice.</p>
        <p>TibaLife acts as a secure data intermediary. While we implement advanced security and blockchain verification, absolute protection cannot be guaranteed.</p>
        <p>By using this platform, you acknowledge limitations of liability under the Laws of Kenya and applicable international standards.</p>
      </div>
      <button onClick={()=>navigate('/')} className="mt-6 px-4 py-2 rounded text-white bg-brand-olive">Back to Home</button>
    </div>
  );
}

export default Disclaimer;



