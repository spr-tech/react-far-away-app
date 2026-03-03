const Footer = ({ items }) => {
  const pluralCheck = items.length === 1 ? "item " : "items";

  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your list 🚀</em>
      </footer>
    );

  const CheckedItems = items.filter((item) => item.checked).length;
  const totalItems = items.length;
  const percentage =
    totalItems === 0 ? 0 : Math.round((CheckedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You have got everything! Ready to go🛫🛫"
        : `
        You have ${items.length} ${pluralCheck}, and you have already packed
      
      ${CheckedItems}
      (${percentage}%)`}
    </footer>
  );
};

export default Footer;
