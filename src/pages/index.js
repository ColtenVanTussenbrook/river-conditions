import React, { useState } from 'react';
import PopularRiverOption from '../components/popularRiverOption';
import StateOption from '../components/StateOption';


const Index = () => {
  const [option, setOption] = useState("state");

  const handleChange = (e) => {
    setOption(e.target.value);
  }

  return (
    <main>
      <title>River Conditions</title>
      <h1>River Conditions</h1>
      <div>
        Find by:
        <select value={option} onChange={handleChange}>
          <option value="state">State</option>
          <option value="popular-rivers">Popular Rivers</option>
        </select> 
      </div>

      {option === "state" ? <StateOption /> : <PopularRiverOption />}
    </main>
  )
}

export default Index
