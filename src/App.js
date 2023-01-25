import "./App.css";
import { useState, useEffect } from "react";
import Waves from "./Waves";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";

function App() {
  //useState() is a Hook that allows you to have state variables in functional components .

  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);

  // this function is checking if the input value contains the percentage mark(%) or not, if not it will add the percentage mark(%) at the end of the value.
  function handleTipChange(e) {
    setTip(e.target.value);
  }
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  // spliting up to people

  //this function ensures that the split value cannot be less than 1.
  function splitMinus() {
    setSplit((oldValue) => {
      if (oldValue === 1) {
        return 1;
      } else {
        // if the max value is greater than 1 then it will return the biggest number after substarction, if not then it will return 1
        return Math.max(oldValue - 1, 1);
      }
    });
  }

  // this function increment the split value by 1 and updates the split state with the new value, so the split value increases by 1.
  function splitPlus() {
    setSplit((oldValue) => oldValue + 1);
  }

  function calculate() {
    const percentage = (1 + parseInt(tip.replace("%", "")) / 100).toFixed(2);
    const totalResult = (bill * percentage) / split.toFixed(2);
    setSplitTotal(totalResult.toFixed(2));
  }

  function calculateTipPerPerson() {
    const tipAmount = ((bill * parseInt(tip.replace("%", ""))) / 100).toFixed(
      2
    );
    const tipPerPerson = (tipAmount / split).toFixed(2);
    setTipPerPerson(tipPerPerson);
  }

  //dependenices, when one
  useEffect(() => {
    calculate();
    calculateTipPerPerson();
    // eslint-disable-next-line
  }, [bill, tip, split, tipPerPerson]);

  return (
    <Waves>
      <section>
        <TopSection
          bill={bill}
          handleBillChange={handleBillChange}
          tip={tip}
          handleTipChange={handleTipChange}
        />
        <BottomSection
          split={split}
          splitTotal={splitTotal}
          splitMinus={splitMinus}
          splitPlus={splitPlus}
          tipPerPerson={tipPerPerson}
        />
      </section>
    </Waves>
  );
}

export default App;
