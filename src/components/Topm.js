import './Topm.css';
import miImg from '../assets/menuBar.jpeg';
import logoImg from '../assets/velLogo.png';
import bellIcon from '../assets/bellicon.png';
import chatImg from '../assets/modeComment.png';
import proPic from '../assets/3shProPic.png';
import dropArr from '../assets/expandIcon.png';

function Topm(){
    return (
        <div className="topmA">
            <div className="topm-left">
                <div className="tabMenu">
                    <img className='miImg' src={miImg} alt='ics'/>
                </div>
                <div className="logo">
                    <img className='logoImg' src={logoImg} alt="ics" />
                </div>
            </div>
            <div className="topm-right">
                <div className="badged">
                    <img className='badges' src={chatImg} alt="ics" />
                    <img className='badges' src={bellIcon} alt="ics" />
                </div>
                <div className="profile">
                    <div className="pnad">
                        <div className="pname">Armand</div>
                        <div className="pjob">Physician</div>
                    </div>
                    <div className="ppic">
                        <img className='pimg' src={proPic} alt="pimg" />
                    </div>
                    <div className="dropArr">
                        <img className='ddarr' src={dropArr} alt="dpic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topm;

