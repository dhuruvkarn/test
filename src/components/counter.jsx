

import axios from 'axios';
import { useEffect, useState } from 'react';
import "./counter.css"
export const Counter = () =>{

    const [num , setNum] = useState(1)

    const deepak = (val) =>{
        setNum(num + val)
      }
  useEffect(()=>{
      getData()
  },[])

  const getData = () =>{
      axios.get("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/deepak_kumar_karn.json")
      .then((res)=>{
          setNum(res.data)
      })
      
  }
    
    return (
      <div>
     <div className='img'>
        <div className= "sub" onClick={()=>deepak(-1)}>-</div>


        <input type="number" className='big_count'  onChange={(e)=>{setNum(+e.target.value)}} value={num}/>

        <div className=  "add" onClick={()=>deepak(1)}>+</div>

     </div>
     <div>Counter Value : {num > 1000 ? 0  : num }</div>
      </div>
    )
}