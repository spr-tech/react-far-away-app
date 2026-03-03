import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Logo from "./components/Logo";
import FormSec from "./components/FormSec";
import DisplayItems from "./components/DisplayItems";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([
    {
      id: nanoid(),
      quantity: 1,
      item: "Passports",
      checked: false,
    },
    {
      id: nanoid(),
      quantity: 1,
      item: "Toothbrush",
      checked: false,
    },
    {
      id: nanoid(),
      quantity: 1,
      item: "Socks",
      checked: false,
    },
    {
      id: nanoid(),
      quantity: 1,
      item: "Charger",
      checked: false,
    },
  ]);

  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState();
  const [order, setOrder] = useState("input");

  const handleClick = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItems = (quant, itm) => {
    const newItem = {
      id: nanoid(),
      quantity: quant,
      item: itm,
      checked: false,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    handleAddItems(quantity, newItem);
    setNewItem(" ");
  };

  const resetAll = () => {
    setItems([]);
  };

  return (
    <>
      <Logo />
      <FormSec
        newItem={newItem}
        handleSubmit={handleSubmit}
        setNewItem={setNewItem}
        quantity={quantity}
        setQuantity={setQuantity}
      />
      <DisplayItems
        items={items}
        handleClick={handleClick}
        handleDelete={handleDelete}
        resetAll={resetAll}
        order={order}
        setOrder={setOrder}
      />
      <Footer items={items} />
    </>
  );
}

export default App;
