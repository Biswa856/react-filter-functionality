import React from "react";
import "./style.css";
import data from './data.js'
import Filter from './Filter.js'

export default function App() {
const [filterData,setFilterData]=React.useState(data)
  function handlechange(e){
    var filter = data.filter((ele)=>{
    
       return ele.brand.toLowerCase().includes(e.target.value) || ele.category.toLowerCase().includes(e.target.value)
    })
    setFilterData(filter)
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <input type="search" placeholder='search your product' onChange={handlechange} />
      <Filter data={filterData}/>
      
    </div>
  );
}
