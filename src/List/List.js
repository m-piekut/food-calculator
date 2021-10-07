
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { addMeal } from "../features/meals/mealsSlice";
import { db } from "../firebase";
import Menu from "../Menu";
import ListItem from "./ListItem";
import allMeals from "../app/mealsplan";
import TypeForm from "./typeForm";
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
    const [clickedMeal, setClickedMeal] = useState()
    const picker = document.querySelector('.typePicker')
    const clickedMealHandler = (meal)=> {
        picker.style.display = 'flex'
        meal.rodzaj = 'śniadania'
        setClickedMeal(meal)
        // dispatch(addMeal([...meals, meal]))
    }
    const selectTypeAndAdd = (type)=>{
        clickedMeal.rodzaj = type
        dispatch(addMeal([...meals, clickedMeal]))
        picker.style.display = 'none'
    }

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
                return(<ListItem searchValue = {searchValue}  item={item} canAdd={!found} ingredients={listItems[item]} clickHandler={()=>clickedMealHandler(meal)}  kids={1}   key={i} i={item} fa={fa}/>)
})}

        </section>
        <div className="typePicker">
        <div className="typePicker__wrapper">
            <button onClick={()=>selectTypeAndAdd('śniadania')} className="typePicker__button">Śniadnaie</button>
            <button onClick={()=>selectTypeAndAdd('obiady')} className="typePicker__button">Obiad</button>
            <button onClick={()=>selectTypeAndAdd('podwieczorki')} className="typePicker__button">Podwieczorek</button>
        </div>
        </div> 
        </section>
        );
}
 
export default List;