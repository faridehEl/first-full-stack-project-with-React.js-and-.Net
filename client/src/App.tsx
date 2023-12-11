import {useState, useEffect} from "react";
function App() {
const [products , setProducts]  = useState([{name : "product"} , {name: "product2"}]);
useEffect(()=>{
  fetch("http://localhost:5000/api/Products")
  .then( response =>response.json())
  .then( data => setProducts(data))
},[])
// function addProducts(){
//   setProducts(prevState=> [...prevState, {name:"product" + (prevState.length+1)}])
// }

  return (
      <div>
       <ul>
       
          {products.map((item , index) => (
            <li key={index}>{item.name}</li>
          ))}
        
       </ul>

       {/* <button onClick={addProducts}> Add products</button> */}
      </div>
  )
}

export default App
