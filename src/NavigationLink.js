const NavigationLink = ({ url, label, active }) => {
    return (
      <li className={active ? "active" : null}>
        <a href={url}>{label}</a>
      </li>
    );
  };
  
  export default NavigationLink;
  