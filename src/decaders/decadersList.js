import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../firebase";

const DecadersList = () => {
    const [decadersList, setDecadersList] = useState([])
    useEffect(()=>{
        db.ref('dekadowki').on('value', (snapshot)=>{
            const data = snapshot.val();
            setDecadersList(data)
            console.log(data)
            if(data){
              
                
                console.log(data)
                setDecadersList(data)
            }
        })
        return()=> setDecadersList('')

    },[])
    return ( 
    <div className="decadersList">
        <h1>Dekadówki</h1>
        {decadersList && Object.keys(decadersList).map((name)=> {
            let ref = Object.keys(decadersList[name])
            return(

            <NavLink className="decadersList__link" key={name} to={`dekadowki/${name}`}>
                <h2>
                    {name}
                </h2>
                <p>{`${ref[0]} -  ${ref[ref.length - 1]}`}</p>
                
                
            </NavLink>
            )
        
        
})}
    </div> );
}
 
export default DecadersList;