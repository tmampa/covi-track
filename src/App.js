import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import DetailsPage from './components/DetailsPage';
import './styles/header.css';
import './styles/app.css';
import './styles/homepage.css';
import './styles/categories.css';
import './styles/detailsPage.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:Country" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
