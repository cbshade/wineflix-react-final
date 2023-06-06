import PlayButton from "./PlayButton";
import InfoCircleButton from "./InfoCircleButton";

const Control = ({ classname, label, icon }) => {
    return (
        <li>
        <button className={classname}>
        {icon === "Play" ? <PlayButton /> : null}
        {icon === "InfoCircle" ? <InfoCircleButton /> : null}
            <span>{label}</span>
        </button>
    </li>
    );
  };
  
  export default Control;
  