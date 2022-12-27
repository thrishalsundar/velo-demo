
import './ProgBar.css'

function ProgBar(data){

    const item=data.data.days;
    const fw=(item/14)*100 | 0;
    console.log(fw);
    const bigBar={
        height:3,
        width:100,
        backgroundColor:"#c4c4c4" //04c35c
    }
    const inBar={
        height:3,
        width:fw,
        backgroundColor:"#04c35c" //04c35c
    }
    return(
        <div className="dos">
            <div className='dataFor'>
                <p className="data1">Days {item} of 14</p>
                <p className="data2">{fw}%</p>
            </div>
            <div style={bigBar} >    <div style={inBar}></div>    </div>
        </div>
    )

}

export default ProgBar;