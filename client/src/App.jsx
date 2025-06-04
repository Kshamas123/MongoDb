import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';           // Signup page (Login.jsx)
import UserLogin from './components/UserLogin';  // Actual login page
import BegintextPage from './components/BegintextPage';
import Sendpage from './components/Sendpage';
import Receivepage from './components/Receivepage';
import Dataenter from './components/Dataenter';
import ReceiverResult from './components/ReceiverResult';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />                         {/* Signup */}
        <Route path="/userlogin" element={<UserLogin />} />            {/* Login */}
        <Route path="/beginpage" element={<BegintextPage />} />
        <Route path="/beginpage/sendpage" element={<Sendpage />} />
        <Route path="/beginpage/receivepage" element={<Receivepage />} />
        <Route path="/beginpage/sendpage/dataenter" element={<Dataenter />} />
        <Route path="/beginpage/receivepage/result" element={<ReceiverResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
