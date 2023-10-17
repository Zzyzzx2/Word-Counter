import { useState, useEffect } from "react"

//import './App.css'
export function ParagraphComp()
{
    const[para,setPara]=useState(() => {
        const storedData = localStorage.getItem("textData"); //Retrieve Data
        if (storedData) {
          return (JSON.parse(storedData));
        }
      });

    useEffect(() => {
        // Save the 'para' state to local storage in JSON format
        localStorage.setItem("textData", JSON.stringify(para));
      }, [para]);
      console.log(typeof para);
      if (typeof para !== "string") {
        setPara(""); // Set it to an empty string if it's not a string
      }
      
    let count = para.split(/\s+/).filter(Boolean).length; 
    
    function handleChange(e)
    {
        setPara(e.target.value)
    }
    return(
    <>
            <form className="form">
            <h1 className="title">Word Counter</h1>
            <textarea className="box" rows="1" cols="50" wrap="physical" onChange={handleChange} value={para}/>
            <p id="count">Count: {count}</p>
            </form>
    </>)
}