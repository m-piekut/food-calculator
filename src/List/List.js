
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { addMeal } from "../features/meals/mealsSlice";
import { db } from "../firebase";
import Menu from "../Menu";
import ListItem from "./ListItem";
import allMeals from "../app/mealsplan";
const List = ({category}) => {
    const meals = useSelector((state) => state.meals.value)
    const [listItems, setListItems] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()
    

    useEffect(()=>{
        db.ref(category).on('value', (snapshot)=>{
            const data = snapshot.val();
            setListItems(data)
        })
        return()=> setListItems('')
    },[])
    const added = useSelector((state) => state.meals.value)
    let arr2 = []
    Object.keys(added).map( el => arr2.push(added[el].name)
    )
    
    

    return ( 
        <section className="list">
            <Menu/>
            <button onClick={()=>{
                let addItem = document.querySelector('.menu')
                addItem.style.display="flex"
            }} 
            className="list__menuBtn">
                <i className="fas fa-bars"></i>
            </button>
            <h1>{category}</h1>
            <input type="text" className="list__serach" value={searchValue} onChange={(e)=> setSearchValue(e.target.value)}/>
            <section className="list__items">
            {Object.keys(listItems).map((item, i )=>{
                const found = arr2.some(r=> item.includes(r))
                let fa
                found ? fa = <i className="fas fa-check"></i> : fa = <i className="fas fa-plus"></i>
                let meal = {}
                meal= listItems[item]
                return(<ListItem searchValue = {searchValue}  item={item} canAdd={!found} ingredients={listItems[item]} clickHandler={()=>{dispatch(addMeal([...meals, meal])); console.log('plus')}} kids={1}   key={i} i={item} fa={fa}/>)
})}

        </section>
        </section>
        
        );
}
 
export default List;