import bgraph from '../assets/barGraph.jpeg';
import './WBar.css';



function WBar(){


    return (
        <div className="wclass">
            <div className="wc-left">
                <p className='fif8'>58</p>
                <p className='t3ma'>3 mins ago</p>
            </div>
            <div className="wc-mline"> </div>
            <div className="wc-right">
                <img className='bgimg' src={bgraph} alt="+"/>
            </div>
        </div>
    )
}

export default WBar;