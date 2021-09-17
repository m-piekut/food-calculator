import { NavLink } from "react-router-dom";
import PrimaryBtn from "./components/PrimmaryBtn";

const Menu = () => {

    const hideMenu =(e)=>{
    console.log(e.target.parentElement)
    e.target.parentElement.style.display = 'none'
    }

    return ( 
        <div className="menu">
            <PrimaryBtn clickHandler={(e)=>{
            e.target.closest(".menu").style.display = "none"
        }} fa ={<i className="fas fa-times"></i>}/>
            <h1>Kategorie</h1>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Zupy-mleczne">Zupy mleczne</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Picie">Picie</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Pasty">Pasty do pieczywa</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Dodatki-do-pieczywa">Dodatki do pieczywa</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Pieczywo">Pieczywo</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Warzywa">Warzywa do śniadania</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Owoce">Owoce</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Zupy">Zupy</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Jarskie">Jarskie</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Półmięsne">Półmięsne</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Mięsne">Mięsne</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/Ryby">Ryby</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/">Podwieczorki</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/IIdanie-dodatek">II Danie-dodatek</NavLink>
            <NavLink onClick={(e)=>hideMenu(e)} to="/surówki">Surówki</NavLink>
            <button  onClick={(e)=>{
                let addItem = document.querySelector('.addItem')
                addItem.style.display="flex"
                e.target.parentElement.style.display = 'none'
            }} className="showAddItem">Dodaj</button>
        </div>
     );
}
 
export default Menu;