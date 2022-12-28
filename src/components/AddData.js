import './AddData.css'
import Cards from './Cards';


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
                name:"Prefered Language",
                type:"radio",
                opts:["English","Tamil","Other Indian Languages"],
            },
        ]


    },
]


function AddData({cancelFunc}) {

    return(
        <div className='overlay'>
            <div className='aboveTable'>
                <div className='standLeft'>
                    <p className='pats'>Add Patients</p>
                </div>
                <div className='standRight'>
                    <div className='summa'><img src='' alt='<-' onClick={()=>cancelFunc()} /><p>Patients</p><p>/Patients Form</p></div>
                </div>
            </div>
            <div className='allCards'>
                {cardsData.map((item)=>{
                    return <Cards item={item} />
                })}
            </div>
        </div>

    )
    
}

export default AddData;