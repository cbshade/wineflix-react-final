const NavigationLink = ({ url, label, active, id }) => {
    return (
      <li className={active ? "active" : null} id={id}>
        <a href={url}>{label}</a>
      </li>
    );
  };
  
  export default NavigationLink;
  