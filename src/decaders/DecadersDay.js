import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import KidsAmount from "../components/KidsAmount";
import NutValues from "../components/nutValues";
import { db } from "../firebase";
import ListItem from "../List/ListItem";

const Wit = () => {
    const url = decodeURI(window.location.href)
    const index = url.indexOf('dekadowki')
    const location = url.slice(index)
    const [data, setData] = useState([])
    let kcal = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    const kids = useSelector((state) => state.meals.kids)

useEffect(()=>{
    db.ref(location).on('value', (snapshot)=>{
        const data = snapshot.val();
        if(data){
            setData(data)
        }
        
    })
},[])
Object.keys(data).forEach(el => {
    protein += data[el].razem.protein
    fat += data[el].razem.fat
    carbohydrates += data[el].razem.carbohydrates
    kcal += data[el].razem.kcal

   
});


    const id = useParams()
    
    
    return ( 
        <div className="addedProducts">
            <KidsAmount/>
        <h1 className="addedProducts__title">{id.id}</h1>
            <NutValues kcal={kcal.toFixed(2)} protein={protein.toFixed(2)} fat={fat.toFixed(2)} carbohydrates={carbohydrates.toFixed(2)}/>
            <section className="list">
        {Object.keys(data).map((item, i )=>{
            return(<ListItem  item={data[item].name} ingredients={data[item]} kids={kids} clickHandler={()=>(console.log(data))}  key={i} i={item} />)
        })}
            </section>
        </div>
     );
}
 
export default Wit;