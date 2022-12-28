import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import Trash from './trash/trash';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const[trashes, setTrashes] = useState(
    localStorage.trashes? JSON.parse(localStorage.trashes) : []
  )
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),                      
      title: "",                       
      body: "",
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  }; 

  return (
    <Router>
    
    <div className="App">
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
       <Routes>
    <Route exact path='trash' element={<Trash/>}/>
    <Route exact path='notes' element={<Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote}/>}/>
    </Routes>
     
    </div>
   
    </Router>
    
  );
}

export default App;