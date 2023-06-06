import PlayButton from "./PlayButton";
import InfoCircleButton from "./InfoCircleButton";

const Control = ({ classname, label, icon, id }) => {
    return (
        <li classname={id}>
        <button className={classname}>
        {icon === "Play" ? <PlayButton /> : null}
        {icon === "InfoCircle" ? <InfoCircleButton /> : null}
            <span>{label}</span>
        </button>
    </li>
    );
  };
  
  export default Control;
  