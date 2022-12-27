import './Physician.css';
import phyImg from '../assets/3shProPic.png';

function Physician(){
    return (
        <div className='physician'>
            <img className="phyPic" src={phyImg} alt="+" />
            <p className='phyName'>Evan Flores</p>
        </div>
    )
}

export default Physician;
