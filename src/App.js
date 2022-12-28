import './App.css';
import Content from './components/Content';
import Topm from './components/Topm';
import Naver from './components/Naver';
import { useState } from 'react';
import AddData from './components/AddData';


function Home({val,cancelFunc}){
  if(val){
    return <AddData cancelFunc={cancelFunc}/>
  }
  return (
     <Content addData={cancelFunc}/>
  )
}
function App() {
    const [menuOpen,setMenuOpen]=useState(true);
    function oCloseFunc(){
      setMenuOpen(!menuOpen);
      console.log("menuOpen:"+menuOpen);
    }

    const [addDataTogg,setAddTogg]=useState(false);
    function cancelFunc(){
      setAddTogg(!addDataTogg);
    }

    return (
      <div className="App">
        <div className='topm'>
          <Topm oCloseFunc={oCloseFunc}/>
        </div>
        <div className='feed'>
          <Naver naverOp={menuOpen}/>
          <div className='hidden'>{menuOpen}</div>
          <Home val={addDataTogg} cancelFunc={cancelFunc}/>
        </div>
      </div>
  );
}

export default App;
