
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Begintextpage from './components/BegintextPage'; // your target page

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/beginpage" element={<Begintextpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
