import Header from './components/Header';
import Homepage from './components/Homepage';
import './styles/header.css';
import './styles/app.css';
import './styles/homepage.css';
import './styles/categories.css';

function App() {
  const heading = 'COVID19 statestics';
  return (
    <div className="App">
      <Header heading={heading} />
      <Homepage />
    </div>
  );
}
export default App;
