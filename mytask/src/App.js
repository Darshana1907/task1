import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button  from './button';


function App() {
   const [val1,setVal1]= useState(1);
   const[val2,setval2] =useState(1);
   const button =[1,2,3,4,5,6,7,8,9,0];
   const btnArr = button.map((num)=><Button btn = {num}/>);
   const button2 =[4,5,6]
   const btnArr2 = button2.map((num)=><Button btn = {num}/>);
   const op =['+','-','*','/','='];
   const button1 =op.map(num=><Button btn = {num}/>);
   

   
  return (
    <div className="App">
      <br/><br/>
    <div>    
   <input  type="number"value={val1} onChange={(e)=>setVal1(e.target.value)} />
   <br/><br/>   
   <input type ="number" value={val2} onChange={(e)=>setval2(e.target.value)}/>
   </div>
   <br/><br/>
     {btnArr}
     <br/>
     {button1}
     <br/>

    </div>
  );
}

export default App;
