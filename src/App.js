import './App.css';
import Content from './components/Content';
import Topm from './components/Topm';
import Naver from './components/Naver';
import { useState } from 'react';

function App() {
    const [menuOpen,setMenuOpen]=useState(true);
    function oCloseFunc(){
      setMenuOpen(!menuOpen);
      console.log("menuOpen:"+menuOpen);
    }


    return (
      <div className="App">
        <div className='topm'>
          <Topm oCloseFunc={oCloseFunc}/>
        </div>
        <div className='feed'>
          <Naver naverOp={menuOpen}/>
          <div className='hidden'>{menuOpen}</div>
          <Content />
        </div>
      </div>
  );
}

export default App;
