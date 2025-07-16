import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";

// Code for List Group component
import ListGroup from "./components/ListGroup";

function App() {
  const allItems = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [filteredItems, setFilteredItems] = useState(allItems);

  // --- Meeting Form State ---
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingDesc, setMeetingDesc] = useState("");
  const [meetingStatus, setMeetingStatus] = useState<string | null>(null);

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMeetingStatus(null);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/meetings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: meetingTitle,
          date: meetingDate,
          description: meetingDesc,
        }),
      });
      if (res.ok) {
        setMeetingStatus("Meeting created successfully!");
        setMeetingTitle("");
        setMeetingDate("");
        setMeetingDesc("");
      } else {
        const err = await res.text();
        setMeetingStatus("Error: " + err);
      }
    } catch (err) {
      setMeetingStatus("Error: " + err);
    }
  };
  // --- End Meeting Form State ---
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

      {/* Meeting Form */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Create Meeting</h3>
        <form onSubmit={handleMeetingSubmit}>
          <div>
            <label>
              Title:
              <input
                type="text"
                value={meetingTitle}
                onChange={(e) => setMeetingTitle(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input
                type="date"
                value={meetingDate}
                onChange={(e) => setMeetingDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Description:
              <textarea
                value={meetingDesc}
                onChange={(e) => setMeetingDesc(e.target.value)}
                required
              />
            </label>
          </div>
          <Button
            color="primary"
            type="submit"
            onClick={() => setAlertVisibility(true)}
          >
            Submit Meeting
          </Button>
        </form>
        {meetingStatus && (
          <Alert onClose={() => setMeetingStatus(null)}>{meetingStatus}</Alert>
        )}
      </div>

      {/* Show API response */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Backend API Test</h3>
        <pre>{apiMessage ? apiMessage : "Loading..."}</pre>
      </div>
    </div>
  );
}

export default App;
