import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

interface MeetingFormProps {
  onMeetingCreated?: () => void;
}

const MeetingForm = ({ onMeetingCreated }: MeetingFormProps) => {
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingDesc, setMeetingDesc] = useState("");
  const [meetingStatus, setMeetingStatus] = useState<string | null>(null);

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMeetingStatus(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/create-meeting`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({
            title: meetingTitle,
            date: meetingDate,
            description: meetingDesc,
          }),
        }
      );
      if (res.ok) {
        setMeetingStatus("Meeting created successfully!");
        setMeetingTitle("");
        setMeetingDate("");
        setMeetingDesc("");
        if (onMeetingCreated) onMeetingCreated();
      } else {
        const err = await res.text();
        setMeetingStatus("Error: " + err);
      }
    } catch (err) {
      setMeetingStatus("Error: " + err);
    }
  };
  function setAlertVisibility(_arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  /*
  function setAlertVisibility(_arg0: boolean): void {
    throw new Error("Function not implemented.");
  }
    */

  return (
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
  );
};

export default MeetingForm;
