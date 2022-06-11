import pic from './turtle.png'
import { motion } from 'framer-motion'
import { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

  

function StartPage() {

  const history = useHistory()
  const [rotate, setRotate] = useState(false)

  function handleClick(path) {
    history.push(path);
  }
  
    return (

  
    <div className="d-grid gap-3 col-4 mx-auto mt-4 align-items-center ">
    <motion.div animate={{ rotate: rotate ? 45: 0}}>
        <img src={pic} height="100px" alt="turtle"/>
    </motion.div>

    <h1 style={{color: "white"}}>Welcome to Turtle Wordle</h1>
    <h3 style={{color: "white"}}>An interactive game for Tortoise Systems</h3>

  <button className="btn" type="button" style={{backgroundColor: "#20c997", color:"white"}} onMouseOver={()=>setRotate(!rotate)} onClick={() => handleClick("begin")}> Begin </button > 
  <button className="btn" type="button" style={{backgroundColor: "#0dcaf0", color:"white"}} onMouseOver={()=>setRotate(!rotate)} onClick={() => handleClick("Instructions")} >Instructions</button>


  </div>



  );
}

export default StartPage;
