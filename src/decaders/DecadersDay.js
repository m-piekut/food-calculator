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
    const [meals, setMeals] = useState([])
    let kcal = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    const kids = useSelector((state) => state.meals.kids)

useEffect(()=>{
    db.ref(location).on('value', (snapshot)=>{
        const meals = snapshot.val();
        if(meals){
            setMeals(meals)
        }
        
    })
},[])
Object.keys(meals).forEach(el => {
    protein += meals[el].razem.protein
    fat += meals[el].razem.fat
    carbohydrates += meals[el].razem.carbohydrates
    kcal += meals[el].razem.kcal

   
});
let mealsNames = []
let sniadania = []
let sniadaniaKcal = 0;
let sniadaniaProtein = 0;
let sniadaniaFat = 0;
let sniadaniaCarbohydrates = 0;

let obiady = []
let obiadyKcal = 0;
let obiadyProtein = 0;
let obiadyFat = 0;
let obiadyCarbohydrates = 0;
let podwieczorki = []
let podwieczorkiKcal = 0;
let podwieczorkiProtein = 0;
let podwieczorkiFat = 0;
let podwieczorkiCarbohydrates = 0;
Object.keys(meals).map((item)=>(mealsNames.push(meals[item])))
Object.keys(meals).map((item)=>{
    if(meals[item].rodzaj === 'śniadania'){
        sniadania.push(meals[item])
        sniadaniaProtein += meals[item].razem.protein
        sniadaniaFat += meals[item].razem.fat
        sniadaniaCarbohydrates += meals[item].razem.carbohydrates
        sniadaniaKcal += meals[item].razem.kcal
    }else if(meals[item].rodzaj === 'obiady'){
        obiady.push(meals[item])
        obiadyProtein += meals[item].razem.protein
        obiadyFat += meals[item].razem.fat
        obiadyCarbohydrates += meals[item].razem.carbohydrates
        obiadyKcal += meals[item].razem.kcal
    }
    else if(meals[item].rodzaj === 'podwieczorki'){
        podwieczorki.push(meals[item])
        podwieczorkiProtein += meals[item].razem.protein
        podwieczorkiFat += meals[item].razem.fat
        podwieczorkiCarbohydrates += meals[item].razem.carbohydrates
        podwieczorkiKcal += meals[item].razem.kcal
    }
})

console.log(meals)
console.log(sniadania)


    const id = useParams()
    
    
    return ( 
        meals ? <div className="addedProducts">
            <KidsAmount/>
        <h1 className="addedProducts__title">{id.id}</h1>
            <NutValues kcal={kcal.toFixed(2)} protein={protein.toFixed(2)} fat={fat.toFixed(2)} carbohydrates={carbohydrates.toFixed(2)}/>
            <section className="list">
            <h1>Śniadanie</h1>
                <p className="addedProducts__p">Kcal {sniadaniaKcal.toFixed(2)} Białko: {sniadaniaProtein.toFixed(2)} Tłuszcz: {sniadaniaFat.toFixed(2)} Węglowodany: {sniadaniaCarbohydrates.toFixed(2)}</p>
            {Object.keys(sniadania).map((item, i )=>{              
                return(<ListItem  item={sniadania[item].name} ingredients={meals[item]} kids={kids}   key={i} i={item} fa={<i className="fas fa-minus"></i>}/>)
})}
                <h1>Obiad</h1>
                <p className="addedProducts__p">Kcal {obiadyKcal.toFixed(2)} Białko: {obiadyProtein.toFixed(2)} Tłuszcz: {obiadyFat.toFixed(2)} Węglowodany: {obiadyCarbohydrates.toFixed(2)}</p>
            {Object.keys(obiady).map((item, i )=>{
                return(<ListItem  item={obiady[item].name} ingredients={meals[item]} kids={kids}   key={i} i={item} fa={<i className="fas fa-minus"></i>}/>)
})}
                <h1>Podwiczorek</h1>
                <p className="addedProducts__p">Kcal {podwieczorkiKcal.toFixed(2)} Białko: {podwieczorkiProtein.toFixed(2)} Tłuszcz: {podwieczorkiFat.toFixed(2)} Węglowodany: {podwieczorkiCarbohydrates.toFixed(2)}</p>
            {Object.keys(podwieczorki).map((item, i )=>{
                return(<ListItem  item={podwieczorki[item].name} ingredients={meals[item]} kids={kids}   key={i} i={item} fa={<i className="fas fa-minus"></i>}/>)
})}
            </section>
        </div> : false
     );
}
 
export default Wit;