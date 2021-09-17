import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeMeal } from "../features/meals/mealsSlice"
import ListItem from "../List/ListItem"

const AddedProducts = () => {
    let kcal = 0
    let protein = 0
    let fat = 0
    let carbohydrates = 0
    const meals = useSelector((state) => state.meals.value)
    meals.forEach(el => {
        protein += el.razem.protein
        fat += el.razem.fat
        carbohydrates += el.razem.carbohydrates
        kcal += el.razem.kcal
        console.log(el.razem.protein)
       
    });
    const dispatch = useDispatch()
    let arr = []
    Object.keys(meals).map((item)=>{arr.push(meals[item])})
    console.log(meals)

    // arr.forEach(item => Object.keys(item).forEach(e => console.log(e)))
    const clickHandler = (meal)=>{
      console.log(meals)
      console.log(arr)
    arr= arr.filter(emploee => emploee.name !== meal)
        dispatch(removeMeal(arr))


    }

    return ( 
        <div className="addedProducts">
            <section className="addedProducts__nutValues">
                <h1 className="addedProducts__kcal">{kcal.toFixed(2)} Kcal</h1>
                <div className="addedProducts__nutWrapper">
                        <p className="addedProducts__protein">Białko: {protein.toFixed(2)}</p>
                        <p className="addedProducts__fat">Tłuszcze: {fat.toFixed(2)}</p>
                        <p className="addedProducts__carbohydrates"> Węglowodany: {carbohydrates.toFixed(2)}</p>


                </div>
            </section>
            <section className="list">
            {Object.keys(meals).map((item, i )=>{
                return(<ListItem  item={meals[item].name} ingredients={meals[item]} kids={10} clickHandler={()=>clickHandler(meals[item].name)}  key={i} i={item} fa={<i className="fas fa-minus"></i>}/>)
})}
            </section>


        </div>



     );
}
 
export default AddedProducts;