import { useState } from "react";

// { items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let selectedIndex = 0; // -1 means no item is selected & 0 means the first item is selected
  //Hook is a function that allows us to tap into built-in React features
  // useState is a Hook that lets you add React state to function components

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
