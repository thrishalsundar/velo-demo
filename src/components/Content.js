import './Content.css';
import addCir from '../assets/addCIrcle.png'
import opts from '../assets/tune.png'
import sea from '../assets/search.png'
import refI from '../assets/refreshIcon.png'
import { useState } from 'react';
import TableAndData from './TableAndData';
import fatas from '../data'
import AddButt from './AddButt';

function Ftab(data){
    
    const changeActive=data.data
    console.log(changeActive)
    return (
        <div className='tableButtons'>
            <div className='actab' >
                <p>Patient Queue</p>
            </div>
            <div className='detab' onClick={changeActive}>
                <p>Service Completed</p>
            </div>
        </div>
    )
}

function Stab(data){

    const changeActive=data.data
    return (
        <div className='tableButtons'> 
            <div className='detab' onClick={changeActive}>
                <p>Patient Queue</p>
            </div>
            <div className='actab'>
                <p>Service Completed</p>
            </div>
        </div>
    )

}

function Content(){

    const [active,setActive]=useState(true);
    const [datas,setDatas]=useState(fatas);
    const [modalToggle,setModalToggle]=useState(false);

    function changeActive(){
        setActive(!active);
    }

    function addData(){
        setModalToggle(true);
    }

    function submitFunc(item){
        const dupeData=datas[0];
        dupeData.name=item.name;
        dupeData.id=item.pid;
        dupeData.location=item.location;
        dupeData.physician=item.phyc;
        console.log(dupeData);
        setDatas([...datas,dupeData]);
    }

    return (
        <div className="contentA">
            <div className='aboveTable'>
                <div className='standLeft'>
                    <p className='pats'>Patients</p>
                    <div className='addPatBtn' onClick={addData}>
                        <img className='addCir' src={addCir} alt='+' />
                        <p> Add Patient </p>
                    </div>
                </div>
                <div className='standRight'>
                    <div className='summa'><p>Patients</p></div>
                    <div className='transIcons'>
                        <img className='transImg' src={opts} alt='+' />
                        <img className='transImg' src={sea} alt='+' />
                        <img className='transImg' src={refI} alt='+' />
                    </div>
                </div>
            </div>
            <div className='tabAndTable'>
                <div>
                    {
                        active?<Ftab data={changeActive} />:<Stab data={changeActive} />
                    }
                </div>
                <div className='tableContainer'>
                    <TableAndData data={datas} />
                </div>
            </div>
            <AddButt open={modalToggle} submitFunc={submitFunc} cancelFunc={()=>setModalToggle(false)}/>
        </div>
    );
}

export default Content;
