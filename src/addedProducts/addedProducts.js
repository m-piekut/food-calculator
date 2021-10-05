
import { useDispatch, useSelector } from "react-redux";
import KidsAmount from "../components/KidsAmount";
import NutValues from "../components/nutValues";
import DecadersForm from "../decaders/DecadersForm";
import { removeMeal } from "../features/meals/mealsSlice"

import ListItem from "../List/ListItem"

const AddedProducts = () => {
   
    let kcal = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    const meals = useSelector((state) => state.meals.value)
    const kids = useSelector((state) => state.meals.kids)
    meals.forEach(el => {
        protein += el.razem.protein
        fat += el.razem.fat
        carbohydrates += el.razem.carbohydrates
        kcal += el.razem.kcal
       
    });
    const dispatch = useDispatch()
    let arr = []
    Object.keys(meals).map((item)=>(arr.push(meals[item])))

    const clickHandler = (meal)=>{
    arr= arr.filter(mealName => mealName.name !== meal)
        dispatch(removeMeal(arr))
    }
    //dodawanie nowej dekadówki
    




    return ( 
        <div className="addedProducts">
            <KidsAmount/>
            <NutValues kcal={kcal.toFixed(2)} protein={protein.toFixed(2)} fat={fat.toFixed(2)} carbohydrates={carbohydrates.toFixed(2)}/>
            <section className="list">
            {Object.keys(meals).map((item, i )=>{
                return(<ListItem  item={meals[item].name} ingredients={meals[item]} kids={kids} clickHandler={()=>clickHandler(meals[item].name)}  key={i} i={item} fa={<i className="fas fa-minus"></i>}/>)
})}
            
            {arr.length > 0 && <button className="addedProducts__addToDecaders"
                 onClick={(e)=>{
                let addItem = document.querySelector('.addItem--decaders')
                addItem.style.display="flex"
            }}>Dodaj do dekadówki</button>}
            </section>
             <DecadersForm arr= {arr}/>
        </div>



     );
}
 
export default AddedProducts;