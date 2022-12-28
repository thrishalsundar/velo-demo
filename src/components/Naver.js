import './Naver.css';
import dboard from '../assets/db.jpeg'
import t3 from '../assets/23ic.jpeg'
import f4 from '../assets/4ic.jpeg'
import f5 from '../assets/5ic.jpeg'
import s6 from '../assets/sixic.jpeg'
import NavComps from './NavComps';
import { useState } from 'react';






function Naver({naverOp}){

    const [navData,setNavData]=useState([
        { itemName:"Dashboard", itemImg:dboard , spl:false, id:0},
        { itemName:"Patients", itemImg:t3, spl:true,id:1},
        { itemName:"Service Management", itemImg:t3, spl:false,id:2,subMenu:["Create Service","Assign Kit"] },
        { itemName:"Report Panel", itemImg:f4, spl:false,id:3 },
        { itemName:"MIS Reports", itemImg:f5, spl:false,id:4 },
        { itemName:"Settings", itemImg:s6, spl:false,id:5 }
    ]);

    const [currAt,setCurrAt]=useState(1);

    function navChange(to){
        const tempData=navData;
        tempData[currAt].spl=false;
        tempData[to].spl=true;
        setCurrAt(to);
        setNavData(tempData);
    }

    if(naverOp){
        return (
        <div className="naverA naverA_coll">
            <div className='naverMenu'>
                {navData.map((item)=>{
                    return <NavComps key={item.itemName} data={item}  shiftFunc={navChange} />
                }) }

            </div>
        </div>
        )

    }
    return (
        <div className="naverA">
            <div className='naverMenu'>
                {navData.map((item)=>{
                    return <NavComps key={item.itemName} data={item}  shiftFunc={navChange} />
                }) }

            </div>
        </div>
    );
}

export default Naver;
