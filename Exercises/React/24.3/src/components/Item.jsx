import React , {useEffect , useContext} from 'react'
import ListItem from "./ListItem/ListItem"
import {context} from "../App"

// data1, setData


function AfterList() {
  const ctx = useContext(context)
  // console.log(context);
  useEffect(() => {
    ctx.setData1([]); 
    console.log(ctx.data1);
  },[])
  return (
    <div>AfterList</div>
  )
}

export default AfterList