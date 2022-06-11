import { Link, useHistory } from "react-router-dom";

function Navbar() {

  const history = useHistory()

  function handleClick(path) {
    history.push(path);
  }
  
  return (
    <>
    <nav className="navbar navbar-expand-lg " style={{backgroundColor: " #21B6A8 "}} >
    <div className="container-fluid">
    <h4 className="navbar-brand" style={{color: "white"}} onClick={() => handleClick("/")}> Turtle Wordle  </h4>
    
  </div>
</nav>
    </>
  );
}

export default Navbar;
