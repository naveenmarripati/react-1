
export default function Deliver(recive){
    return(
        <>
         <ul>
            <img src={recive.image} />
            <div>
            <li>{recive.brand}</li>
            <li>{recive.price}</li>
            <li>{recive.available}</li>
            </div>
         </ul>
        </>
    )
}