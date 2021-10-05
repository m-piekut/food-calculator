import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import PrimaryBtn from "../components/PrimmaryBtn";
import { db } from "../firebase";

const DecadersForm = ({arr}) => {
    const [decadersNames, setDecadersNames] = useState('') //nazwy dekdówek
    const [date, setDate] = useState('') // data wprowadzana w kalendarzu
    const formWrapper = document.querySelector('.addItem--decaders')
    useEffect(()=>{
        db.ref(`dekadowki`).on('value', (snapshot)=>{
            const data = snapshot.val();
            console.log(data)
            if(data){
              
                console.log(Object.keys(data))
                setDecadersNames(Object.keys(data))
            }
            console.log(decadersNames.length)
        })
    },[decadersNames.length])


 
   




    // <input type="date"  name="date" id="date" value={date}  onChange={el => {setDate(el.target.value)}} />
    // <button onClick= {()=> addToDecaders()}>Dodaj do dekadówki</button>

    return (
        
        <div className="addItem addItem--decaders">

     &&<Formik
        initialValues={{
            decaderName: decadersNames ? decadersNames[decadersNames.length -1] :'nowa',
            date: date,
        }}
        onSubmit={values => {
            if(values.decaderName === 'nowa'){
                arr.forEach(e => {
                    console.log(date)
                    db.ref(`dekadowki/Dekadówka${decadersNames.length+1}/${values.date}/${e.name}`).set(e)
                    values.decaderName = decadersNames[decadersNames.length -1]
                })
            }else{
                arr.forEach(e => {

                    db.ref(`dekadowki/Dekadówka${decadersNames.length}/${values.date}/${e.name}`).set(e)
                })
            }
            alert('Dodano do dekadówki')
            formWrapper.style.display = 'none'
        }}
>
<div className="addItem__wrapper">
        <PrimaryBtn clickHandler={(e)=>{
            e.target.closest(".addItem").style.display = "none"
        }} fa ={<i className="fas fa-times"></i>}/>
        <Form className="addItem__form"  >
            <div className="addItem__uperWrapper">

            <label className="addItem__label" htmlFor="decaderName">Dekadówka:</label>
            <Field className="addItem__longInput" name="decaderName" as="select" id="decaderName">
               {decadersNames[0]!== 'Nowa' && decadersNames && decadersNames.map(el => <option value={el}>{el}</option>)}
               <option value="nowa">Nowa</option>
            </Field>
           
            <label className="addItem__label" htmlFor="date">Kategoria:</label>
            <Field className="addItem__longInput"  required type="date" name="date" id="date" />
            </div>
            
            
            <div className="addItem__buttons">

            
            <button type="submit" className="addItem__submit" type="submit">Dodaj</button>
            </div>
        </Form>
        </div>



</Formik>
        </div>
    )
}
 
export default DecadersForm;