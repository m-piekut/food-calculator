import { useState } from "react";
import PrimaryBtn from "../components/PrimmaryBtn";
import MoreButton from "../components/MoreButton";
import ListTable from "./ListTable";


const ListItem = ({item, i, ingredients, clickHandler, fa, kids, searchValue}) => {
    const [showListTable, setShowListTable] = useState(false)
    if(searchValue){

        return ( 
            (item.toLowerCase().search(searchValue.toLowerCase()) !==-1 )?
            <div className="list__item" key={i}>
        <div className="list__itemUp">
        <p  className="list__itemName">{item}</p>
        { fa &&  <PrimaryBtn clickHandler={()=>clickHandler(item, ingredients)} fa={fa}/>}
        </div>
        {showListTable ? <ListTable kids={kids}  item={item} ingredients={ingredients}/> : false}
        <MoreButton rotate={!showListTable} clickHandler={()=>setShowListTable(!showListTable)}/>
    
    </div> : false



);
}else{
    return(
        <div className="list__item" key={i}>
        <div className="list__itemUp">
        <p  className="list__itemName">{item}</p>
        { fa &&  <PrimaryBtn clickHandler={()=>clickHandler(item, ingredients)} fa={fa}/>}
        </div>
        {showListTable ? <ListTable kids={kids}  item={item} ingredients={ingredients}/> : false}
        <MoreButton rotate={!showListTable} clickHandler={()=>setShowListTable(!showListTable)}/>
    
    </div>
    )
}
}
 
export default ListItem;