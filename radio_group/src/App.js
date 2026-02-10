import './App.css';
import { useState } from 'react';
import { RadioGroup, RadioOption } from './Radio';

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h2>How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </header>
    </div>
  );
}

export default App;
