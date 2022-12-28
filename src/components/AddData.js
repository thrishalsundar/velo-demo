import './AddData.css'
import Cards from './Cards';
import backgo from '../assets/backGo.png';


const cardsData=[
    {
        title:"Basic Info",
        fields:[
            {
                name:"Title",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"First Name",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Middle Name",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Last Name",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Gender",
                type:"radio",
                opts:["Male","Female","Others"],
            },
            {
                name:"Date of Birth",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Email",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Phone Number",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Alternative Phone Number",
                type:"text",
                placeholder:"Choose Title"
            },
            {
                name:"Prefered Language",
                type:"dropDown",
                placeholder:"Select a Language",
                opts:["English","Tamil","Other Indian Languages"],
            },
        ]


    },
]


function AddData({cancelFunc}) {

    return(
        <div className='overlay'>
            <div className='aboveTablead'>
                <div className='standLeftad'>
                    <p className='patsad'>Add Patients</p>
                </div>
                <div className='standRight'>
                    <div className='summa'><img className='backgoimg' src={backgo} alt='<-' onClick={()=>cancelFunc()} /><p style={{color:"#8085e9"}}>Patients </p><p style={{paddingLeft:10}}>/  Patients Form</p></div>
                </div>
            </div>
            <div className='allCards'>
                
                <div className="extCardsDiv">
                    <div className="extTitleDiv pd3">
                        <p className="extCardTitle">Exisiting Patient</p>
                    </div>
                    <div className="extFieldsDiv">
                        <div className='extDropDownField'>
                            <select style={{flex:1}} className='extFIS'>
                                <option value="" disabled selected style={{color:"#b8bac3"}}>Select an Exisiting Patient</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="extCIFS">
                            <input className="extFIS" type="text" placeholder="Enter a Patient ID/ Patient Mobile No/ Patient Name"/>
                        </div>
                        <div className='buttonDiv'>
                            <p>View Patients</p>
                        </div>
                    </div>
                </div>
                {cardsData.map((item)=>{
                    return <Cards item={item} />
                })}
            </div>
        </div>

    )
    
}

export default AddData;
