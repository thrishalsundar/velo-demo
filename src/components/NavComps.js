

import './NavComps.css';

function NavComps(data){

    const item=data.data;
    console.log(item.id);
    const thatFunc=data.shiftFunc;

    if(item.spl){
        return (
            <div className='navCompSpl'>
                <img className='navImgs' src={item.itemImg} />
                <p className='fontNav'>{item.itemName}</p>
            </div>
        );
    }
    return (
        <div className="navComp" onClick={()=>thatFunc(item.id)}>
            <img className='navImgs' src={item.itemImg} />
            <p className='fontNav'>{item.itemName}</p>
        </div>
    );
}

export default NavComps;
