import React, { useState } from 'react'
import './Dataenter.css'
const Dataenter = () => {
    const [text,setText]=useState('');
    const passkey = localStorage.getItem('passkey');
   async function handleclick()
    {
        await fetch('http://localhost:5000/api/message/store', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ passkey,message: text }),
});
    }
  return (
     <div className="text-area-container">
      <h2 className="heading">Enter Your Message</h2>
      <textarea
        className="styled-textarea"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="20"
      ></textarea>
      
      <div className="button-container1">
        <button className="button-49" role="button" onClick={handleclick}>Store</button>
      </div>
    </div>
  )
}

export default Dataenter