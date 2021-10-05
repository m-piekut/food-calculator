import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import AddedProducts from "../addedProducts/addedProducts";
import { db } from "../firebase";
import ListItem from "../List/ListItem";

const DecadersItem = () => {
    const id = useParams().id
    const [days, setDays] = useState('')
    const [data, setData] = useState(null)
    useEffect(() => {
        db.ref(`dekadowki/${id}`).on('value', (snapshot)=>{
            const data = snapshot.val();
            if(data){
                setData(data)
                setDays(Object.keys(data))
            }
        })
        return () => {
            setDays('')
        }
    }, [id])

    return (   
        <div className="decadersList">
            
           {days && days.map(el => 
                <NavLink className="decadersList__link" key={el} to={`${id}/${el}`}>{el}</NavLink>
            )}



           
        </div>
      );
}
 
export default DecadersItem;