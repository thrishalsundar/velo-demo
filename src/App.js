import './App.css';
import Content from './components/Content';
import Topm from './components/Topm';
import Naver from './components/Naver';

function App() {
  return (
    <div className="App">
      <div className='topm'>
        <Topm />
      </div>
      <div className='feed'>
        <Naver />
        <Content />
      </div>
    </div>
  );
}

export default App;
