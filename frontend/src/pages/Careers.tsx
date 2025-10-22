import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Careers: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="font-ubuntu text-3xl font-semibold mb-4">Careers</h1>
      <p>We are hiring soon. Subscribe to the newsletter and job updates.</p>
      <form className="mt-4 flex gap-2" onSubmit={(e)=>{e.preventDefault(); navigate('/');}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required placeholder="your@email" className="border px-3 py-2 rounded w-72"/>
        <button className="bg-brand-red text-white px-4 py-2 rounded">Subscribe</button>
      </form>
    </div>
  );
}

export default Careers;




