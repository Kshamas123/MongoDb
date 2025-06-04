import React, { useEffect, useState } from 'react';

const ReceiverResult = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedMessage = localStorage.getItem('message');
    console.log('Retrieved from localStorage:', storedMessage); // 🐛 Debug log

    if (storedMessage && storedMessage.trim() !== '') {
      setMessage(storedMessage);
    } else {
      setError('No message found. Try again.');
    }

    setLoading(false);
  }, []);

  return (
    <div className="receiver-container">
      {loading ? (
        <p style={{ color: '#ccc' }}>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red', fontSize: '18px', fontWeight: 'bold' }}>{error}</p>
      ) : (
        <>
          <h2 style={{ color: '#00e6f6' }}>Received Message:</h2>
          <p style={{ fontSize: '1.2rem', color: '#ffffff' }}>{message}</p>
        </>
      )}
    </div>
  );
};

export default ReceiverResult;
