import React from "react";


export default function Filter(props){

  const data = props.data
  return(
    <div>
     
      {
        data.map((ele)=>{
         return(
           <>
           <p>{ele.category}</p>
           <p>{ele.brand}</p>
           </>
         )
        })
        }
      </div>
  )
}