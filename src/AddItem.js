import { useState } from "react";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { db } from "./firebase";
import Ingredient from "./components/Ingredient";
import PrimaryBtn from "./components/PrimmaryBtn"
import { useEffect } from "react";
const AddItem = () => {
    
   const [arr, setArr] = useState([<Ingredient i={0} key={0}/>, <Ingredient i={1} key={1}/>])
   let i = arr.length
    return ( 
        <div className="addItem">
            <Formik
                initialValues={{
                    mealName: '',
                    category: 'Owoce',
                    //     ingridients:[
                        //         {
                            //             ingredientName: 'Mleko 3,2%',
                            //             ingredientMeasure: 'ml',
                            //             ingredientQuantity: 180,
                            //             ingredientProtein: 5.94,
                            //             ingredientFat: 5.76,
                            //             ingredientCarbohydrates: 8.64,
                            //             ingredientKcal: 109.8,
                            //         }
                            // ]
                        }}
            onSubmit={values => {
                String.prototype.capitalize = function() {
                    return this.charAt(0).toUpperCase() + this.slice(1);
                }
                let kcal= 0
                let fat= 0
                let carbohydrates= 0
                let protein= 0
                // same shape as initial values
                db.ref(`${values.category}/${values.mealName}`).set({
                    name: values.mealName
                })
                values.ingridients.forEach(element => {
                    protein+= element.ingredientProtein
                    kcal +=element.ingredientKcal
                    fat += element.ingredientFat
                    carbohydrates+= element.ingredientCarbohydrates
                    
                    db.ref(`${values.category}/${values.mealName}/${(element.ingredientName).capitalize()}`).set({
                        name: (element.ingredientName).capitalize(),
                        measure: element.ingredientMeasure ? element.ingredientMeasure : 'g',
                        quantity: element.ingredientQuantity,
                        protein: element.ingredientProtein,
                        fat: element.ingredientFat,
                        carbohydrates: element.ingredientCarbohydrates,
                        kcal: element.ingredientKcal
                    })
                });
                db.ref(`${values.category}/${values.mealName}/razem`).set({
                    name: 'razem',
                    protein: protein,
                    fat: fat,
                    carbohydrates: carbohydrates,
                    kcal: kcal
                })
                
                console.log('kcal', kcal)
                console.log('fat', fat)
                console.log('protein', protein)
                console.log('carbohydrates', carbohydrates)
            }}
>




        <div className="addItem__wrapper">
        <PrimaryBtn clickHandler={(e)=>{
            e.target.closest(".addItem").style.display = "none"
        }} fa ={<i className="fas fa-times"></i>}/>
        <Form className="addItem__form"  >
            <div className="addItem__uperWrapper">

            <label className="addItem__label" htmlFor="mealName">Nazwa dania:</label>
            <Field className="addItem__longInput"  required type="text" name="mealName" id="mealName" />
            <label className="addItem__label" htmlFor="category">Kategoria:</label>
            <Field className="addItem__longInput" name="category" as="select" id="category">
                <option value="Zupy mleczne">Zupy mleczne</option>
                <option value="Picie">Picie</option>
                <option value="Pasty do pieczywa">Pasty do pieczywa</option>
                <option value="Dodatki do pieczywa">Dodatki do pieczywa</option>
                <option value="Pieczywo">Pieczywo</option>
                <option value="Warzywa do śniadania">Warzywa do śniadania</option>
                <option value="Owoce">Owoce</option>
                <option value="Zupy">Zupy</option>
                <option value="Jarskie">Jarskie</option>
                <option value="Półmięsne">Półmięsne</option>
                <option value="Mięsne">Mięsne</option>
                <option value="Ryby">Ryby</option>
                <option value="Podwieczorki">Podwieczorki</option>
                <option value="II Danie-dodatek">II Danie-dodatek</option>
                <option value="Surówki">Surówki</option>
            </Field>
            </div>
            <div className="addItem__ingredients">

            {arr.map((item)=>item)}
            </div>
            
            <div className="addItem__buttons">

            <button className="addItem__next" type="button" onClick={()=> {setArr([...arr, <Ingredient i={i} key={i}/>])}}>Kolejny składnik</button>
            <button className="addItem__submit" type="submit">Dodaj</button>
            </div>
        </Form>
        </div>

</Formik>
</div>


     );
}
 
export default AddItem;