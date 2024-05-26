import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      password: password,
    };
    const url = "";
    axios
      .post(url, data)
      .then((res) => {
        if (res.data === "User logged in successfully") {
          setIsLoggedIn(true);
          navigateTo("/header");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    history.pushState(null, null, "");
    window.addEventListener("popstate", function () {
      this.history.pushState(null, null, "");
    });
  }, []);

  return (
    <>
      {!isLoggedIn && (
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h1 className="text-3xl font-bold  dark:text-white text-black">
                Login
              </h1>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Welcome back
              </p>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium  dark:text-white text-black"
                >
                  Your username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                  placeholder="username"
                  onChange={(e) => handleNameChange(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  dark:text-white text-black"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 "
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-500 dark:bg-gray-700  dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="font-medium text-black dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#580475] hover:bg-[#6a0a8c] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#580475] dark:hover:bg-[#6a0a8c] dark:focus:ring-[#580475]"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
