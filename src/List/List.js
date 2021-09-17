
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddItem from "../AddItem";
import MoreButton from "../components/MoreButton"
import PrimaryBtn from "../components/PrimmaryBtn";
import { addMeal } from "../features/meals/mealsSlice";
import { db } from "../firebase";
import Menu from "../Menu";
import ListItem from "./ListItem";

const List = ({category}) => {
    const meals = useSelector((state) => state.meals.value)
    const [listItems, setListItems] = useState([])
    const dispatch = useDispatch()
    

    useEffect(()=>{
        db.ref(category).on('value', (snapshot)=>{
            const data = snapshot.val();
            console.log(data)
            setListItems(data)
        })
        return()=> setListItems('')
    },[])



    return ( 
        <div className="list">
            <Menu/>
            <button onClick={()=>{
                let addItem = document.querySelector('.menu')
                addItem.style.display="flex"
            }} className="list__menuBtn"><i className="fas fa-bars"></i></button>
            <h1>{category}</h1>
            <input type="text" className="list__serach" />
        <section className="list__items">
            {Object.keys(listItems).map((item, i )=>{
                let key = item
                let meal = {}
                meal= listItems[item]
                return(<ListItem  item={item} ingredients={listItems[item]} clickHandler={()=>{dispatch(addMeal([...meals, meal])); console.log('plus')}} kids={1}   key={i} i={item} fa={<i className="fas fa-plus"></i>}/>)
})}

        </section>
        </div>
        
        );
}
 
export default List;