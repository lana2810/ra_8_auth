import "./App.css";
import React, { useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import User from "./Components/User";
import Main from "./Components/Main";
import NewsList from "./Components/NewsList";
import { useAuth } from "./hooks/useAuth";

function App() {
  const { currentUser, setUser } = useAuth();
  useEffect(() => {
    setUser();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        {currentUser ? <User /> : <Form />}
        {currentUser ? <NewsList /> : <Main />}
      </div>
    </>
  );
}

export default App;
