import { useState, useEffect } from "react";

const letters = [
 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const getRandomLetters = () => {
  return letters[Math.floor(Math.random() * letters.length)];
};



function Begin() {
  const [seconds, setSeconds] = useState(0);
  const [mseconds, setmSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [letter, setLetter] = useState(getRandomLetters());
  const [score, setScore] = useState(0)
  let [min, setMin] = useState(0)
  const winScore = 3

  


  var timer;

  useEffect(()=>{
  
  },[])




  useEffect(() => {

    if (isActive) {

      if(seconds !==20){
      timer = setInterval(() => {
        setmSeconds(mseconds + 1);
        if (mseconds > 59) {
          
          setSeconds(seconds + 1);
          setmSeconds(0);

          const randomLetter = getRandomLetters();
          setLetter(randomLetter);

          getData();
        

        }
      }, 10);}
      else{
        alert('You Lost')
        setIsActive(!isActive)
        setmSeconds(0);
        setSeconds(0);
      } if(score == winScore){
        let secc = JSON.stringify(seconds)
        let msecc = JSON.stringify(mseconds)
       if(((secc+(msecc/60)) >= min)){
        alert("You beat your highscore")
       }
        alert("you won! ")
        setmSeconds(0);
        setSeconds(0);
        setScore(0);
        setIsActive(!isActive);
        winTime()

      }

      return () => clearInterval(timer);
    }
  });

  let inputLetter=''




  function getData(data){



    console.log(data.target.value)

    inputLetter = data.target.value

    if(inputLetter == letter){
      console.log("same letter")
      const randomLetter = getRandomLetters();
      setLetter(randomLetter);
      setScore(score+1);
      
    } else {
      console.log("wrong letter")
      setmSeconds(mseconds+50)
    } 
    

    data.target.value = ''

  }

  function winTime(){
    if(score ===winScore){
      console.log({seconds},{mseconds})
      
      let sec = JSON.parse(seconds);
      let msec = JSON.parse(mseconds);
      console.log(sec)
      console.log(msec)

      const totalTime = sec+(msec/60)
      console.log(totalTime)


      let timeHistory = localStorage.getItem("time") || '[]';
      timeHistory = JSON.parse(timeHistory);
      timeHistory.push(totalTime);
      localStorage.setItem("time", JSON.stringify(timeHistory));

      let timeToSort = localStorage.getItem("time")

      let timeToSortArr= JSON.parse(timeToSort)
      console.log(timeToSortArr)

      min = Math.min(...timeToSortArr)
      console.log(min)   
      
      setMin(min)
      

    }

     
  }




return (
    <div className="Begin">
      < div className="d-grid gap-3 col-4 mx-auto mt-4 align-items-center ">
        <div className="game_container">

          <h2 className="text-center" style={{"color": "white"}}>Type The Alphabet</h2>
          <p className="text-center" style={{"color": "white"}}> Typing Game To See How Fast You Type. Timer Starts When You Do :) </p>



          <div className="d-grid gap-3 col-4 mx-auto mt-4 align-items-center" style={{"height": "100px", "width": "200px", backgroundColor: " #21B6A8"}}>
          <h1 className="text-center align-items-center" style={{"color": "white"}}>{letter}</h1>
          </div>


          <p className="text-center align-items-center mt-2" style={{"color": "white"}}>
            Time:&nbsp;
            {seconds < 10 ? "0" + seconds : seconds} :{" "}
            {mseconds < 10 ? "0" + mseconds : mseconds}
          </p>

          <button type="button" className="btn btn-info d-grid gap-3 col-4 mx-auto mt-4 align-items-center" onClick={() => {setIsActive(!isActive);}}> Start game </button>

          <input className="d-grid gap-3 col-4 mx-auto mt-4 align-items-center" type="text" onChange={getData}/>
          <p className="text-center align-items-center mt-2" style={{"color": "white"}}>Your Best Time is {min}s</p>
         

          


        </div>
      </div>
    </div>
  );

}


export default Begin;