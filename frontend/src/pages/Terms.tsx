import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Terms: React.FC = () => {
  const [agree, setAgree] = useState({ terms: false, privacy: false, cookie: false });
  const navigate = useNavigate();
  const allChecked = agree.terms && agree.privacy && agree.cookie;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-ubuntu text-3xl font-semibold">Terms of Use</h1>
        <button className="text-sm underline" onClick={() => navigate('/')}>Cancel</button>
      </div>
      <div className="prose max-w-none">
        <p>Welcome to TibaLife. By accessing or using our platform, you agree to comply with and be bound by these Terms of Use.</p>
        <p>TibaLife provides a digital health records and auditing platform... Kenya Data Protection Act (2019) and GDPR...</p>
        <p>Users are responsible for maintaining confidentiality... informational and auditing purposes only.</p>
        <p>We reserve the right to update these terms... Continued use implies acceptance.</p>
        <h2>Cookie Policy</h2>
        <p>TibaLife uses essential and performance cookies... Manage in your browser settings.</p>
        <h2>Acceptance</h2>
      </div>
      <div className="mt-6 space-y-2 text-sm">
        <label className="flex items-center gap-2"><input type="checkbox" checked={agree.terms} onChange={e=>setAgree({...agree, terms:e.target.checked})}/> I have read and agree to the Terms of Use</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={agree.privacy} onChange={e=>setAgree({...agree, privacy:e.target.checked})}/> I have read and agree to the Privacy Policy</label>
        <label className="flex items-center gap-2"><input type="checkbox" checked={agree.cookie} onChange={e=>setAgree({...agree, cookie:e.target.checked})}/> I have read and agree to the Cookie Policy</label>
      </div>
      <button disabled={!allChecked} onClick={()=>navigate('/')} className={`mt-4 px-4 py-2 rounded text-white ${allChecked? 'bg-brand-red':'bg-gray-300 cursor-not-allowed'}`}>Accept & Continue</button>
    </div>
  );
}

export default Terms;



