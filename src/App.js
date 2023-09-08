import {useEffect,useState} from "react";
import Card from "./Card";
import "./App.css"
import React ,{ search } from 'semantic-ui-react'
const App=()=>
{

let [find,setFind]=useState("");

let [Name,setName]=useState([{name:"srt",course:"ReactJs",price:500},
{name:"mno",course:"NodeJs",price:400},
{name:"xyz",course:"JQuery",price:450},
{name:"abc",course:"AngularJs",price:600},
{name:"kkk",course:"Java",price:800},
{name:"bno",course:"C++",price:550},]);

let [fName,setFName]=useState([]);
let [name,setNname]=useState();
let [course,setCourse]=useState();
let [pprice,setPrice]=useState();



const manageFind=(mf)=>
{
  setFind(mf.target.value);
}
useEffect(()=>
setFName(Name.filter((detail)=>detail.name.includes(find)))

,[find])



const deleteName=(dn)=>
{
  setName(Name.filter((detail)=>detail.name!=dn))
}








const manageName=(mn)=>
{
  setNname(mn.target.value);
}
const manageCourse=(mc)=>
{
  setCourse(mc.target.value);
}
const managePrice=(mp)=>
{
  setPrice(mp.target.value);
}
const addName=()=>
{
  console.log(name+" "+course+" "+pprice)

  setName([{name,course,price:pprice},...Name])
}








const editPrice=(b,p)=>
{
  alert(b);
  alert(p);
  setName(Name.filter((detail)=>
  {
  if(detail.name===b)
{
  return detail.price=p;
}
  else{
  return detail;
  }

  }
  
   ) )


}
return(
<div className="div1">
  
  <input type="text" placeholder="name"  onChange={manageName} className="t1"/>
  <input type="text" placeholder="course" onChange={manageCourse} className="t2"/>
  <input type="text" placeholder="price" onChange={managePrice} className="t3"/>

  <button onClick={addName} id="add">+</button>

  <i class="icon search"><input type="text" onChange={manageFind} id="find" placeholder="Search"/></i>

  <br/>
  {

find? fName.map((detail)=> <Card name={detail.name} course={detail.course} price={detail.price} deleteName={deleteName} editPrice={editPrice}/>)
:
Name.map((detail)=> <Card name={detail.name} course={detail.course} price={detail.price} deleteName={deleteName} editPrice={editPrice}/>)


  }
  </div>
);
};

export default App;
