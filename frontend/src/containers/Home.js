import React, { useState, useEffect } from "react";
// import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../lib/contextLib";
import { onError } from "../lib/errorLib";
import { API } from "aws-amplify";
import "./Home.css";
import { BsPencilSquare } from "react-icons/bs";
// import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
      setIsLoading(false);
    }
    onLoad();
  }, [isAuthenticated]);

  function loadNotes() {
    return API.get("athugasemdir", "/aths");
  }

  function renderNotesList(notes) {
    return (
      <>
        <Link to="/notes/new">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">Create a new note</span>
          </ListGroup.Item>
        </Link>

        <Link to="/settings">
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">Settings</span>
          </ListGroup.Item>
        </Link>

        {notes.map(({ athId, content, createdAt }) => (
          <Link key={athId} to={`/notes/${athId}`}>
            <ListGroup.Item action>
              <span className="font-weight-bold">
                {content.trim().split("\n")[0]}
              </span>
              <br />
              <span className="text-muted">
                Created: {new Date(createdAt).toLocaleString()}
              </span>
              <br />
              <span className="text-muted">athId: {athId}</span>
            </ListGroup.Item>
          </Link>
        ))}
      </>
    );
  }

  //   function renderNotesList(notes) {
  //     return null;
  //   }

  function renderLander() {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
      </div>
    );
  }

  function renderNotes() {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your X Notes</h2>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
      </div>
    );
  }
  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}

// import React from "react";
// import "./Home.css";
// export default function Home() {
//   return (
//     <div className="Home">
//       <div className="lander">
//         <h1>Scratch</h1>
//         <p className="text-muted">A simple note taking app</p>
//       </div>
//     </div>
//   );
// }
