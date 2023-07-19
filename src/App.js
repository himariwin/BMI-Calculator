import { useState } from 'react';
import './App.css';

function App() {
// making state of our application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

// logic
  let calcBmi = (e) => {
    e.preventDefault();

    if(weight=== 0 || height=== 0)
    {
      alert('Please enter a valid weight and height');
    }
    else {
      let bmi = (weight/(height*height)*703);
      setBmi(bmi.toFixed(1));

      //

      if(bmi < 25) {
        setMessage("You are underweight..");
      }

      else if (bmi >= 25 && bmi < 30 ) {
        setMessage("You are a healthy person! ;)");
      }

      else {
        setMessage('You are overweight..');
      }
    }
  }

  //reload
  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="container">
      <h1>BMI Calculator</h1>
      <span>Let's calculate your Body Mass Index! <br></br> Type the values below ↓ </span>
        <form onSubmit={calcBmi}>
          
          <div className="area-input">
            <label>Weight (ibs):</label>
            <input
              type="text" 
              placeholder="Enter your weight value" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
            />

            <label>Height (in):</label>
            <input
              type="text" 
              placeholder="Enter your height value" 
              value={height} 
              onChange={(e) => setHeight(e.target.value)}
            />

            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="submit">Reload</button>
          </div>

          <div className="center">
            <h2> Your BMI is: {bmi}</h2>
            <p>{message}</p>
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
