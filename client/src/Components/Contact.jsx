import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState(null);

  const onChange = (e) => {
    setMessage(e.target.value);
  }

  useEffect(() => {
    const fetchLandLord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchLandLord();
  }, [listing.userRef]);

  return (
    <>
      {landlord && (
        <div className='flex flex-col gap-2'>
          <p>Contact: <span className='font-semibold'>{landlord && landlord.username}</span> for <span className='font-semibold'>{listing.name.toLowerCase}</span></p>
          <textarea className='w-full border p-3 rounded-md' name='message' id='message' value={message} placeholder='enter your message here' onChange={onChange} rows={2}></textarea>
          <Link className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95' to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`} >
            Send Message
          </Link>
        </div>
      )}
    </>
  )
}
