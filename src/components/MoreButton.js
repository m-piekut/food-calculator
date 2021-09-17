const MoreButton = ({rotate, clickHandler}) => {
    return ( 
        <button onClick={clickHandler} className="primaryBtn primaryBtn--more">
            { rotate ? <i className="fas fa-caret-down"></i> : <i className="fas fa-caret-up"></i>}
        </button>
     );
}
 
export default MoreButton;