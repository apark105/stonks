import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import TickerCard from './components/TickerCard';

function App() {
  return (
    <div className="container">
        <Header/>
        <Search/>
        <TickerCard/>
    </div>
  );
}

export default App;
