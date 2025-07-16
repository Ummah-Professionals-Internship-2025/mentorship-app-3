import { useState, useEffect } from "react";
//import Alert from "./components/Alert";
//import Button from "./components/Button";
//import SearchBar from "./components/SearchBar";
import MeetingForm from "./components/MeetingForm";
// Code for List Group component
// import ListGroup from "./components/ListGroup";

function App() {
  // const allItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // const [filteredItems] = useState(allItems);

  // Function for checking if the item is in the list from the navbar

  /* const handleSelectItem = (item: string) => {
    console.log(item);
  };
  */

  const [] = useState(false);
  // --- API fetch demo ---
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch((err) => setApiMessage("Error: " + err));
  }, []);
  // ----------------------

  return (
    <div>
      <div></div>

      <br />
      <br />

      {/* Meeting Form */}
      <MeetingForm />

      {/* Show API response */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Backend API Test</h3>
        <pre>{apiMessage ? apiMessage : "Loading..."}</pre>
      </div>
    </div>
  );
}

export default App;
