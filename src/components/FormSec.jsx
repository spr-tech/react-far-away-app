const FormSec = ({
  newItem,
  setNewItem,
  handleSubmit,
  quantity,
  setQuantity,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>What do you need for your 😍 trip?</label>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default FormSec;
