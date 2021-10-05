import {NavLink} from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <nav className="nav">
                
                    <NavLink className="nav__item" exact to="/">Lista</NavLink>  
                    <NavLink className="nav__item" to="/razem">Razem</NavLink>
                    <NavLink className="nav__item" to="/dekadowki">Dekadówki</NavLink>
                
            
            </nav>
        </header>
     );
}
 
export default Header;