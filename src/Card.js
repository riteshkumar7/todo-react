import {useState} from "react";
import "./App.css";

const Card=({name,course,price,deleteName,editPrice})=>
{


  let [p,setP]=useState();
  const managePrice=(mp)=>
  {
    setP(mp.target.value);
  }


  return(
<div className="div">

<input type="text" placeholder="Edit Price" onChange={managePrice} className="t4"/>

  <h2>Name :-{name}</h2>
  <p>Course :-{course}</p>
  <p>Price :-{price}</p>
  <button onClick={()=>deleteName(name)}>Delete</button>
  <button onClick={()=>editPrice(name,p)}>Edit</button>
</div>
  );
}
export default Card;