

import './NavComps.css';

function NavComps(data){

    const item=data.data;

    if(item.spl){
        return (
            <div className='navCompSpl'>
                <img className='navImgs' src={item.itemImg} />
                <p className='fontNav'>{item.itemName}</p>
            </div>
        );
    }
    return (
        <div className="navComp">
            <img className='navImgs' src={item.itemImg} />
            <p className='fontNav'>{item.itemName}</p>
        </div>
    );
}

export default NavComps;
