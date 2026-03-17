import { useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import Logo from "./components/Logo";
import FormSec from "./components/FormSec";
import DisplayItems from "./components/DisplayItems";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem("travelItems");

      if (!saved || saved === "undefined" || saved === "") {
        return [];
      }

      return JSON.parse(saved);
    } catch (error) {
      console.error("Critical JSON Error:", error);
      localStorage.removeItem("travelItems");
      return [];
    }
  });

  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState();
  const [order, setOrder] = useState("input");

  const handleSetAndSave = (savedItems) => {
    localStorage.setItem("travelItems", JSON.stringify(savedItems));
    setItems(savedItems);
  };

  const handleClick = (id) => {
    const checkedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    handleSetAndSave(checkedItems);

    // setItems((prev) =>
    //   prev.map((item) =>
    //     item.id === id ? { ...item, checked: !item.checked } : item,
    //   ),
    // );
  };

  const handleDelete = (id) => {
    const returnedItems = items.filter((item) => item.id !== id);
    handleSetAndSave(returnedItems);

    // setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddItems = (quant = 1, itm) => {
    const newItem = {
      id: nanoid(),
      quantity: quant,
      item: itm,
      checked: false,
    };

    const existingItems = [...items, newItem];

    handleSetAndSave(existingItems);
    // setItems((prev) => [...prev, newItem]);
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
