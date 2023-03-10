import { useState, useEffect } from "react";
import Waves from "./Waves";
import { Container, Flex } from "@chakra-ui/react";
import TopSection from "./components/TopSection";
import BottomSection from "./components/BottomSection";
import MiddleSection from "./components/MIiddleSection";
import HeaderSection from "./components/HeaderSection";
import { calcTipPerPerson } from "./utils/utils";
import FooterSection from "./components/FooterSection";

const App = () => {
  //useState() is a Hook that allows you to have state variables in functional components .

  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState(1);
  const [splitTotal, setSplitTotal] = useState(0);
  const [tipPerPerson, setTipPerPerson] = useState(0);
  const [totalBill, setTotalBill] = useState(0);

  // this function is checking if the input value contains the percentage mark(%) or not, if not it will add the percentage mark(%) at the end of the value.
  function handleTipChange(e) {
    setTip(e.target.value);
  }
  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  // spliting up to people

  //this function ensures that the split value cannot be less than 1.
  const splitMinus = () => {
    setSplit((oldValue) => {
      if (oldValue === 1) {
        return 1;
      } else {
        // if the max value is greater than 1 then it will return the biggest number after substarction, if not then it will return 1
        return Math.max(oldValue - 1, 1);
      }
    });
  };

  // this function increment the split value by 1 and updates the split state with the new value, so the split value increases by 1.
  const splitPlus = () => {
    setSplit((oldValue) => oldValue + 1);
  };

  const calculate = () => {
    const percentage = (1 + tip / 100).toFixed(2);
    const totalResult = (bill * percentage) / split.toFixed(2);
    setSplitTotal(totalResult.toFixed(2));
  };

  const calculateTipPerPerson = () => {
    const tipPerPerson = calcTipPerPerson(bill, tip, split);
    setTipPerPerson(tipPerPerson);
  };

  const calculateTotalBill = () => {
    const percentage = (1 + tip / 100).toFixed(2);
    const totalBill = bill * percentage;
    setTotalBill(totalBill.toFixed(2));
  };

  //dependenices, when one
  useEffect(() => {
    calculate();
    calculateTipPerPerson();
    calculateTotalBill();
    // eslint-disable-next-line
  }, [bill, tip, split, tipPerPerson]);

  return (
    <Waves>
      <Container maxW="full" display={"flex"} justifyContent={"center"} top={0}>
        <Flex
          justifyContent={"center"}
          position={"relative"}
          w={"full"}
          color={"white"}
          fontFamily={"Kalam"}
        >
          <section>
            <HeaderSection />
            <TopSection
              bill={bill}
              handleBillChange={handleBillChange}
              tip={tip}
              handleTipChange={handleTipChange}
            />
            <MiddleSection
              split={split}
              splitMinus={splitMinus}
              splitPlus={splitPlus}
            />

            <BottomSection
              splitTotal={splitTotal}
              tipPerPerson={tipPerPerson}
              totalBill={totalBill}
            />

            <FooterSection />
          </section>
        </Flex>
      </Container>
    </Waves>
  );
};

export default App;
