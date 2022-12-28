

import { useState  } from 'react';
import './NavComps.css';

function NavComps(data){

    const item=data.data;
    console.log(item.id);
    const thatFunc=data.shiftFunc;

    const [subVal,setSubVal]=useState('Create Service');
    function subChanger(to){
        setSubVal(to);
    }

    if(item.spl && item.subMenu){
        return (
            <div className='navCompSupSpl'>
                <div className='navCompSplMain' onClick={()=>subChanger('Create Service')}>
                    <img className='navImgs' src={item.itemImg} alt="+" />
                    <p className='fontNav'>{item.itemName}</p>
                </div>
                <div className='subMenu'>
                    {
                        item.subMenu.map((se)=>{
                            console.log(subVal==se)
                            if(subVal===se){
                                return (<div className="navComp navCompSubTrue" >
                                    <img className='navImgs' src={item.itemImg} alt="+"/>
                                    <p className='fontNav'>{se}</p>
                                    <p className='hidden'>{subVal}</p>
                                </div>)
                            }
                            return (
                                <div className="navComp navCompSubFalse" onClick={()=>subChanger(se)}>
                                    <img className='navImgs' src={item.itemImg} alt="+"/>
                                    <p className='fontNav'>{se}</p>
                                    <p className='hidden'>{subVal}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
    if(item.spl){
        return (
            <div className='navCompSpl'>
                <img className='navImgs' src={item.itemImg} alt="+"/>
                <p className='fontNav'>{item.itemName}</p>
            </div>
        );
    }
    return (
        <div className="navComp" onClick={()=>thatFunc(item.id)}>
            <img className='navImgs' src={item.itemImg} alt="+"/>
            <p className='fontNav'>{item.itemName}</p>
        </div>
    );
}

export default NavComps;
