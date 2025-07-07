import { useState } from "react";

interface Props {
  value: string;
  onChange: (newValue: string) => void;
  onDone: () => void;
}

const EditableItem = ({ value, onChange, onDone }: Props) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange(inputValue);
    onDone();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex" style={{ gap: "8px" }}>
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
      />
      <button className="btn btn-sm btn-success" type="submit">
        Save
      </button>
    </form>
  );
};

export default EditableItem;
