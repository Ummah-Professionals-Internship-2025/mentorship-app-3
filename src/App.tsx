import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [cities, setCities] = useState<string[]>([
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Paris",
  ]);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleDeleteItem = (index: number) => {
    setCities((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEditItem = (index: number, newValue: string) => {
    const updated = [...cities];
    updated[index] = newValue;
    setCities(updated);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div className="container mt-4">
      <ListGroup
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
        onDeleteItem={handleDeleteItem}
        onEditItem={handleEditItem}
      />

      <br />
      <br />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
