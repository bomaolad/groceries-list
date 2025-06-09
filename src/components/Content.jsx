import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Item 1",
    },
    {
      id: 2,
      checked: true,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
    {
      id: 4,
      checked: false,
      item: "Item 4",
    },
  ]);

  const handleDeleteItem = () => {
    items.filter((item) => {
      item.id !== id;
    });
  };

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
