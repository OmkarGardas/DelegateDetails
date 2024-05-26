import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Content from "./Content";
import { useNavigate } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";

const Header = () => {
  const navigateTo = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const handleLog = () => {
    setLoggedIn(false);
    if (confirm("Log out") === true) {
      navigateTo("/");
    }
  };
  useEffect(() => {
    history.pushState(null, null, "");
    window.addEventListener("popstate", function (event) {
      this.history.pushState(null, null, "");
    });
  }, []);

  return (
    <>
      {loggedIn && (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between h-auto w-auto m-3 p-2.5">
          <div className="flex justify-center items-center gap-2">
            <TbListDetails style={{fontSize:"2rem"}} className="ml-2"/>
            <h1 className="text-3xl font-bold p-2">Delegate Details</h1>
          </div>
          <button className="btn btn-primary" onClick={handleLog}>
            Logout
          </button>
        </nav>
      )}

      {loggedIn && <Content />}
    </>
  );
};

export default Header;
