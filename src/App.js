import { HashRouter, Route } from "react-router-dom";
import AddedProducts from "./addedProducts/addedProducts";
import AddItem from "./AddItem";
import DecadersItem from "./decaders/DecadersItem";
import DecadersList from "./decaders/decadersList";
import Wit from "./decaders/DecadersDay";
import Header from "./header/Header";
import List from "./List/List";


function App() {
  return (
    <div className="app">

      
    <HashRouter>
      <Header/>
      <AddItem/>

      <Route  exact path='/'><List category="Podwieczorki"/></Route>
      <Route   path='/surówki'><List category="Surówki"/></Route>
      <Route   path='/IIdanie-dodatek'><List category="II Danie-dodatek"/></Route>
      <Route   path='/Ryby'><List category="Ryby"/></Route>
      <Route   path='/Picie'><List category="Picie"/></Route>
      <Route   path='/Mięsne'><List category="Mięsne"/></Route>
      <Route   path='/Półmięsne'><List category="Półmięsne"/></Route>
      <Route   path='/Jarskie'><List category="Jarskie"/></Route>
      <Route   path='/Zupy'><List category="Zupy"/></Route>
      <Route   path='/Owoce'><List category="Owoce"/></Route>
      <Route   path='/Warzywa'><List category="Warzywa do śniadania"/></Route>
      <Route   path='/Pieczywo'><List category="Pieczywo"/></Route>
      <Route   path='/Dodatki-do-pieczywa'><List category="Dodatki do pieczywa"/></Route>
      <Route   path='/Pasty'><List category="Pasty do pieczywa"/></Route>
      <Route   path='/Zupy-mleczne'><List category="Zupy mleczne"/></Route>
      <Route   path='/razem'><AddedProducts/></Route>
      <Route   exact path='/dekadowki'><DecadersList/></Route>
      <Route    exact path='/dekadowki/:id'><DecadersItem/></Route>
      <Route    path='/dekadowki/:id/:id'><Wit id2="dekadówlo/:id/:id"/></Route>
        
      
    </HashRouter>
    
    </div>
  );
}

export default App;
