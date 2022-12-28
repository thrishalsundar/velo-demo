import './Cards.css'
import Fields from "./Fields";


function Cards({item}) {
    console.log(item.fields);
    return (
        <div className="cardsDiv">
            <div className="titleDiv">
                <p className="cardTitile">{item.title}</p>
            </div>
            <div className="fieldsDiv">
                {item.fields.map((field)=>{
                    return <Fields field={field} />
                })}
            </div>
        </div>
    )
}

export default Cards;