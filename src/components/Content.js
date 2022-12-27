import './Content.css';
import addCir from '../assets/addCIrcle.png'
import opts from '../assets/tune.png'
import sea from '../assets/search.png'
import refI from '../assets/refreshIcon.png'
import { useState } from 'react';
import TableAndData from './TableAndData';


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

    function changeActive(){
        setActive(!active);
    }
    return (
        <div className="contentA">
            <div className='aboveTable'>
                <div className='standLeft'>
                    <p className='pats'>Patients</p>
                    <div className='addPatBtn'>
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
                    <TableAndData />
                </div>
            </div>
        </div>
    );
}

export default Content;
