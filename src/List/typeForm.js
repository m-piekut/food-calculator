import { useDispatch } from "react-redux"
import { addMeal } from "../features/meals/mealsSlice"

const TypeForm = ({meals, clickedMeal}) => {
    const dispatch = useDispatch()
    const selectTypeAndAdd = (type)=>{
        clickedMeal.rodzaj = type
        dispatch(addMeal([...meals, clickedMeal]))
    }
    return ( 

        <div className="typePicker">
        <div className="typePicker__wrapper">
            <button onClick={()=>selectTypeAndAdd('śniadania')} className="typePicker__button">Śniadnaie</button>
            <button onClick={()=>selectTypeAndAdd('obiady')} className="typePicker__button">Obiad</button>
            <button onClick={()=>selectTypeAndAdd('podwieczorki')} className="typePicker__button">Podwieczorek</button>
        </div>
        </div> 
        
     );
}
 
export default TypeForm;