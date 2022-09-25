import logo from "./logo.svg";
import "./App.css";
import Notes from "./features/Notes";
import FloatingButton from "./components/FloatingButton";
import CustomModal from "./components/Modal";
import { useState } from "react";
function App() {
  //per hapjen/mbylljen e modalit
  const [open, setOpen] = useState(false);

  //fushat e modalit
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [id, setId] = useState("");

  const [type, setType] = useState("");

  //nje array me objekte
  const [notesData, setNotesData] = useState([]);

  const onSave = () => {
    if (title.length > 0 && description.length > 0) {
      //do editojm
      if (id.length > 0) {
        var tmp = {
          id: notesData[id].id,
          title: title,
          description: description,type:type
        };

        var n = notesData;
        n[id] = tmp;
        setNotesData(n);
      } else {
        var tmp = {
          id: notesData.length,
          title: title,
          description: description,type:type
        };

        setNotesData([...notesData, tmp]);
      }

      setOpen(false);
      setTitle("");
      setDescription("");
      setId("");
    }
  };

  const onCancel = () => {
    setId("");
    setOpen(false);
    setTitle("");
    setDescription("");
  };

  const onDelete = (index) => {
    setNotesData(notesData.filter((el, i) => i != index));
  };
  const onOpen = (index) => {
    setId(index.toString());
    const tmp = notesData[index];
    setTitle(tmp.title);
    setDescription(tmp.description);
    setOpen(true);
  };

  return (
    <div className="App">
      <FloatingButton setOpen={setOpen} />
      <CustomModal
        onCancel={onCancel}
        onSave={onSave}
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        setDescription={setDescription}
        description={description}
        type={type}
        setType={setType}
      />
      <Notes onDelete={onDelete} notesData={notesData} onOpen={onOpen} />
    </div>
  );
}

export default App;
