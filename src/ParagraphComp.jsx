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
    
     
    let count = para===undefined? 0:para.split(/\s+/).filter(Boolean).length; 
    
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