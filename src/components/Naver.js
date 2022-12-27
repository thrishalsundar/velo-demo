import './Naver.css';
import dboard from '../assets/db.jpeg'
import t3 from '../assets/23ic.jpeg'
import f4 from '../assets/4ic.jpeg'
import f5 from '../assets/5ic.jpeg'
import s6 from '../assets/sixic.jpeg'
import NavComps from './NavComps';



const navData=[
    { itemName:"Dashboard", itemImg:dboard , spl:false},
    { itemName:"Patients", itemImg:t3, spl:true},
    { itemName:"Service Management", itemImg:t3, spl:false },
    { itemName:"Report Panel", itemImg:f4, spl:false },
    { itemName:"MIS Reports", itemImg:f5, spl:false },
    { itemName:"Settings", itemImg:s6, spl:false },
]

function Naver(){

    return (
        <div className="naverA">
            <div className='naverMenu'>
                {navData.map((item)=>{
                    return <NavComps key={item.itemName} data={item} />
                }) }

            </div>
        </div>
    );
}

export default Naver;
