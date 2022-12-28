
import './Fields.css';

function Fields({field}) {
    
    console.log(field);
    switch (field.type) {
        case "text":
            return (
                <div className="cardsInput">
                    <p className="fieldTitle">{field.name}</p>
                    <input className="fieldInput" type="text" placeholder={field.placeholder}/>
                </div>
            );

        case "radio":
            return (
                <div className="cardRadio">
                    <p className="fieldTitle">{field.name}</p>
                    <div className="fieldRadDiv">
                        {
                            field.opts.map((opt)=>{
                                return (
                                    <div className='opts'>
                                        <input type="radio" className="radios" name={opt} value={opt} />
                                        <p className='radioOpts'>{opt}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            )

        case "dropDown":
            return (
                <div className="dropDownfield">
                    <p className="fieldTitle">{field.name}</p>
                    <select className="fieldInput"  id={field.name} name={field.name}>
                        <option value="" disabled selected>{field.placeholder}</option>
                        {
                            field.opts.map((opt)=>{
                                <option value={opt}>{opt}</option>
                            })
                        }
                    </select>
                </div>
            )
    
        default:
            break;
    }

}

export default Fields;