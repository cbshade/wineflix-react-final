const DrinkAgain = (props) => {
    return (
      <>
        <li>
          <div className="wine">
            <img src={props.imageUrl} alt={props.label} />
            {props.isNew ? <span className="new-badge">New!</span> : null}
          </div>
        </li>
      </>
    );
  };
  
  export default DrinkAgain;
  