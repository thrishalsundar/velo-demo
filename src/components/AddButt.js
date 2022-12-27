import { useState } from 'react';
import './AddButt.css'

function AddButt({open,submitFunc,cancelFunc}) {
    const [name,setName]=useState("");
    const [location,setLoc]=useState("");
    const [pid,setPid]=useState("");
    const [phyc,setPhyc]=useState("");
    function flushForm(){
        setName("")
        setLoc("")
        setPid("")
        setPhyc("")
    }
    if(!open) return null;

    return(
        <div className='overlay'>
            <div className='formToAdd'>
                <h2 className="epats">Enter Patient Details:</h2>
                <input className="inpFs" onChange={(e)=>setName(e.target.value)} name="name" value={name} type='text' placeholder='Name' />
                <input className="inpFs" onChange={(e)=>setLoc(e.target.value)} name="location" value={location} type='text' placeholder='Location' />
                <input className="inpFs" onChange={(e)=>setPid(e.target.value)} name="pid" value={pid} type='text' placeholder='Patient ID' />
                <input className="inpFs" onChange={(e)=>setPhyc(e.target.value)} name="phyc" value={phyc} type='text' placeholder='Physician' />
                <div className="modalBtns" onClick={()=>{submitFunc({name,location,pid,phyc}); flushForm()}} >Add</div>
                <div className="modalBtns" onClick={cancelFunc} >Cancel</div>
            </div>
        </div>
    )
    
}

export default AddButt;