
import ListTableRow from "./listTableRow"

const ListTable = ({ingredients, kids}) => {
    
    
    
    return ( 
        <table>
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Miara</th>
                            <th>Ilość</th>
                            <th>Białko</th>
                            <th>Tłuszcze</th>
                            <th>Węglowodany</th>
                            <th>Kcal</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Object.keys(ingredients).map((item, i )=>{
            let protein=0
            let fat=0
            let carbohydrates=0
            let kcal=0
                            protein +=   ingredients[item].protein ? ingredients[item].protein : 0
                            fat += ingredients[item].fat ? ingredients[item].fat : 0
                            carbohydrates += ingredients[item].carbohydrates ? ingredients[item].carbohydrates : 0
                            kcal += ingredients[item].kcal ? ingredients[item].kcal : 0
                            return(
                            <ListTableRow ingridient = {ingredients[item]} kids={kids} i={i} key={i}/>
                            )
                        }
                            )}
                            {/* <tr>
                                <th>Razem</th>
                                <td></td>
                                <td></td>
                                <td>{protein}</td>
                                <td>{fat}</td>
                                <td>{carbohydrates}</td>
                                <td>{kcal}</td>
                            </tr> */}
                    </tbody>
                    
                </table>
     );
}
 
export default ListTable;