import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

// Code for List Group component
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  /*
``// this would go inside the return statement of the App component
        <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> 

  */
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <div>
        <ListGroup
          items={items}
          heading="Cities"
          onSelectItem={handleSelectItem}
        />
      </div>

      <br />
      <br />

      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
        )}
        <Button color="secondary" onClick={() => setAlertVisibility(true)}>
          My Button
        </Button>
      </div>
    </div>
  );
}

export default App;
