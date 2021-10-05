import { useDispatch, useSelector } from "react-redux";
import { kidsAmount } from "../features/meals/mealsSlice";

const KidsAmount = () => {
    const dispatch = useDispatch()
    const kids = useSelector((state) => state.meals.kids)
    const changeKidsAmt = (e) =>{
        e.target.value >= 0 ? dispatch(kidsAmount(e.target.value)) :  dispatch(kidsAmount(0))
    }



    return ( 
        <div className="kidsAmount">
            <label htmlFor="kidsAmount__number">Ilość dzieci:</label>
            <input onChange={(e)=>changeKidsAmt(e)} value={kids} id="kidsAmount__number" className="kidsAmount__number" type="number" pattern="[0-9]*" min={1}/>
           
        </div>
     );
}
 
export default KidsAmount;