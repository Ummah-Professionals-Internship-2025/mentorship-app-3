import { useState } from "react";
import EditableItem from "./EditableItem"; // Make sure the path is correct

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  onDeleteItem: (index: number) => void;
  onEditItem: (index: number, newValue: string) => void; // New prop
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  onDeleteItem,
  onEditItem,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [editIndex, setEditIndex] = useState<number | null>(null); // Track editing row

  return (
    <>
      <h1>{heading} List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active d-flex justify-content-between align-items-center"
                : "list-group-item d-flex justify-content-between align-items-center"
            }
            key={index}
          >
            {editIndex === index ? (
              <EditableItem
                value={item}
                onChange={(newValue) => onEditItem(index, newValue)}
                onDone={() => setEditIndex(null)}
              />
            ) : (
              <>
                <span
                  onClick={() => {
                    setSelectedIndex(index);
                    onSelectItem(item);
                  }}
                  style={{ cursor: "pointer", flexGrow: 1 }}
                >
                  {item}
                </span>
                <div>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => setEditIndex(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => onDeleteItem(index)}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
