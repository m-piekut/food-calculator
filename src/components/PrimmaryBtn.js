const PrimaryBtn = ({fa, clickHandler}) => {
    return ( 
        <button onClick={clickHandler} className="primaryBtn">{fa}</button>
     );
}
 
export default PrimaryBtn;