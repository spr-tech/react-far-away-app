import { FaTrashAlt } from "react-icons/fa";
import ButtonLine from "./ButtonLine";

const DisplayItems = ({
  items,
  handleClick,
  handleDelete,
  resetAll,
  order,
  setOrder,
}) => {
  let selectedOption;

  if (order === "input") selectedOption = items;

  if (order === "description")
    selectedOption = items.slice().sort((a, b) => a.item.localeCompare(b.item));

  if (order === "packed")
    selectedOption = items.slice().sort((a, b) => b.checked - a.checked);

  return (
    <div className="list">
      <div>
        <ul>
          {selectedOption.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleClick(item.id)}
              />
              <label>{item.quantity}</label>
              <label
                style={item.checked ? { textDecoration: "line-through" } : item}
              >
                {item.item}
              </label>
              <FaTrashAlt
                tabIndex={0}
                className="delete"
                onClick={() => handleDelete(item.id)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ButtonLine
          items={items}
          resetAll={resetAll}
          order={order}
          setOrder={setOrder}
        />
      </div>
    </div>
  );
};

export default DisplayItems;
//
