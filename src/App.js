import React, { useEffect, useState } from 'react';
import Main from './components/Main'
import { Link, useHistory } from "react-router-dom";

function App() {
  
  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {

    if(window.location.pathname === "/contact")
      setPath(window.location.pathname);

  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }
  
  useEffect(() => {
    checkPath();
  }, []);

  const showContact = path;
  let _contact;
  if(showContact !== "/contact"){
    _contact = (<li><Link to ="/contact">Contact</Link></li>)
  }

  return (
    <div className="App">
      <div className="container">
        <nav>
          <ul>
            <li><Main /></li>
          </ul>
          <ul>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
