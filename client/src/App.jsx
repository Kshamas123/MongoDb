import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import BegintextPage from './components/BegintextPage';
import Sendpage from './components/Sendpage';
import Receivepage from './components/Receivepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beginpage" element={<BegintextPage />} />
        <Route path="/beginpage/sendpage" element={<Sendpage />} />
        <Route path="/beginpage/receivepage" element={< Receivepage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
