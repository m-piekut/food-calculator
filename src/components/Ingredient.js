import { Field } from "formik";

const Ingredient = ({i}) => {
    return ( 
        <div className="ingredient" key ={i}>
            <div>
                <label htmlFor="ingredientName">Produkt</label>
                <Field type="text" name={`ingridients.[${i}]ingredientName`} id="ingredientName" />
            </div>
            <div>
                <label htmlFor="ingredientMeasure">Miara</label>
                <Field name={`ingridients.[${i}]ingredientMeasure`} as="select" id="ingredientMeasure">
                    <option  value="g">g</option>
                    <option value="ml">ml</option>
                </Field>
            </div>
            <div>
                <label htmlFor="ingredientQuantity">Ilość</label>
                <Field type="number" name={`ingridients.[${i}]ingredientQuantity`} id="ingredientQuantity" />
            </div>
            <div>
                <label htmlFor="ingredientProtein">Białko</label>
                <Field type="number" name={`ingridients.[${i}]ingredientProtein`} id="ingredientProtein" />
            </div>
            <div>
                <label htmlFor="ingredientFat">Tłuszcze</label>
                <Field type="number" name={`ingridients.[${i}]ingredientFat`} id="ingredientFat" />
            </div>
            <div>
                <label htmlFor="ingredientCarbohydrates">Węglowodany</label>
                <Field type="number" name={`ingridients.[${i}]ingredientCarbohydrates`} id="ingredientCarbohydrates" />
            </div>
            <div>
                <label htmlFor="ingredientKcal">Kcal</label>
                <Field type="number" name={`ingridients.[${i}]ingredientKcal`} id="ingredientKcal" />
            </div>
        </div>
     );
}
 
export default Ingredient;