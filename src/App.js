import logo from './logo.svg';
import './App.css';
import ResetComp from './components/resetComp';
import IncreaseComp from './components/increaseComp';
import DecreaseComp from './components/decreaseComp';
import { useSelector } from 'react-redux';
function App() {
  const data = useSelector(store => store.comp);
  console.log(data)
  return (
    <div className="App container">
      <div>
      <h1>{data}</h1>
      <div className='inner-container'>
      <ResetComp />
      <IncreaseComp />
      <DecreaseComp />
      </div>
      </div>
    </div>
  );
}

export default App;
