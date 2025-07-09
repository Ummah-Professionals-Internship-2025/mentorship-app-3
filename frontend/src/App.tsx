import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";

// Code for List Group component
import ListGroup from "./components/ListGroup";

function App() {
  const allItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [filteredItems, setFilteredItems] = useState(allItems);

  // Function for checking if the item is in the list from the navbar

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleSearch = (query: string) => {
    const lower = query.toLowerCase();
    setFilteredItems(
      allItems.filter((item) => item.toLowerCase().includes(lower))
    );
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <div>
        <SearchBar onSearch={handleSearch} />
      </div>

      <div>
        <ListGroup items={filteredItems} onSelectItem={handleSelectItem} />
      </div>

      <br />
      <br />

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Safe Travels :D{" "}
          </Alert>
        )}
        <Button color="danger" onClick={() => setAlertVisibility(true)}>
          Click me!
        </Button>
      </div>
    </div>
  );
}

export default App;
