const NutValues = ({kcal, protein, fat, carbohydrates}) => {
    return ( <section className="addedProducts__nutValues">
    <h1 className="addedProducts__kcal">{kcal} Kcal</h1>
    <div className="addedProducts__nutWrapper">
            <p className="addedProducts__protein">Białko: {protein}</p>
            <p className="addedProducts__fat">Tłuszcze: {fat}</p>
            <p className="addedProducts__carbohydrates"> Węglowodany: {carbohydrates}</p>


    </div>
</section> );
}
 
export default NutValues;