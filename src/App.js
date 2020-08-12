import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import Main from "./components/Main";

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
    <Main />
  );
}

export default App;
