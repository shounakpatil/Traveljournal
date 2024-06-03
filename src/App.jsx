import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./travelj_n";
import "./travelj.css";
import TravelSec from "./travelsec";
import data from "./datata";
function App() {
   const cards=data.map((item)=>{
   return( 
<TravelSec
    key={item.id}
    item={item}
/>
   );

   })
    return (
        <>
         <Navbar/>
         <div className="journalsec">
          {cards} 
         </div>
        </>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

export default App;

  