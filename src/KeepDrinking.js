const KeepDrinking = (props) => {
    return (
        <>
            <li>
                <div className="wine">
                    <img src={props.imageUrl} alt={props.label} />
                    <div className="amount-consumed">
                        <progress min="0" max="100" value={props.progress}></progress>
                    </div>
                </div>
            </li>
        </>
    );
};

export default KeepDrinking;
