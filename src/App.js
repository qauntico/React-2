import CartHeader from "./components/Header/Header";
import Body from "./components/Body/Body";
import MealItems from "./components/List-items/mealItems";
import Modal from "./components/Gui/Modal";
import CartProvider from "./components/Contex/CartProvider";
import { useState } from "react";
function App() {
  const [isVisible, setIsVisible] = useState(false);
  function Visible(){
    setIsVisible(true)
  }
  function notVisible(){
    setIsVisible(false)
  }
  return (
    <CartProvider>
      <CartHeader modalVisible={Visible}  />
      <Body />
      <MealItems />
      {isVisible && <Modal  modalNotVible={notVisible}/>}
    </CartProvider>
  );
}

export default App;
