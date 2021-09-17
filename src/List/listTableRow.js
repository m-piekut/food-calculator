import { useState } from "react";

const ListTableRow = ({ingridient, i, kids}) => {
    const [quan, setQuan]= useState(ingridient.quantity * kids)
    
    return ( 
        ingridient.name ? <tr key={i}>
            <td>{ingridient.name}</td>
            <td>{ingridient.measure}</td>
            {ingridient.quantity ? <td>{quan}</td> : <td></td> }
            
            {ingridient.protein  ? <td>{(ingridient.protein).toFixed(2)}</td> : <td>0</td>}
            {ingridient.fat ? <td>{(ingridient.fat).toFixed(2)}</td> : <td>0</td>}
            {ingridient.carbohydrates ? <td>{(ingridient.carbohydrates).toFixed(2)}</td> : <td>0</td>}
            {ingridient.kcal ? <td>{(ingridient.kcal).toFixed(2)}</td> : <td>0</td>}
            
        </tr> : false
     );
}
 
export default ListTableRow;