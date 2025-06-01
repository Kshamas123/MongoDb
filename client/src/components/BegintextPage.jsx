import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BeginPage.css';

const BegintextPage = () => {
  const navigate = useNavigate();

  function handlesend() {
    navigate('/beginpage/sendpage');
  }

  function handlereceive() {
    navigate('/beginpage/receivepage');
  }

  return (
    <div className="button-container">
      <button className="button-49" role="button" onClick={handlesend}>
        Send
      </button>
      <button className="button-49" role="button" onClick={handlereceive}>
        Receive
      </button>
    </div>
  );
};

export default BegintextPage;
