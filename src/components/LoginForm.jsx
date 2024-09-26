import { useState } from "react";
import { EyeHiddenIcon, EyeOpenIcon } from "../assets/icon";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = formData;

  const navigate = useNavigate();

  //Function to update form data
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsError(false);

    // empty field validation
    if (username.trim() === "" || password.trim() === "") {
      setIsError(true);
      return;
    }

    // user authentication validation
    if (username !== "admin") {
      alert("Username does not exist.");
      return;
    }

    if (password !== "admin") {
      alert("Password does not match.");
      return;
    }

    localStorage.setItem("isLoggedIn", true);
    navigate("/");
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      {/* FIELD: Username ---------------- */}
      <div className="py-2">
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          placeholder="Username"
          className="form-input"
          onChange={handleChange}
        />
        {isError && username.trim() === "" && (
          <p className="text-red-600 text-sm pt-1">Username is required.</p>
        )}
      </div>

      {/* FIELD: Username ---------------- */}
      <div className="py-2 relative">
        <input
          type={isPwVisible ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          placeholder="Password"
          className="form-input"
          onChange={handleChange}
        />
        {isPwVisible ? (
          <EyeOpenIcon
            onClick={() => setIsPwVisible((prev) => !prev)}
            className="absolute top-5 right-3 cursor-pointer h-5 w-5"
          />
        ) : (
          <EyeHiddenIcon
            onClick={() => setIsPwVisible((prev) => !prev)}
            className="absolute top-5 right-3 cursor-pointer h-5 w-5"
          />
        )}
        {isError && password.trim() === "" && (
          <p className="text-red-600 text-sm pt-1">Password is required.</p>
        )}
      </div>

      <div className="py-2 relative">
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-[5px] duration-150 ease-in hover:bg-primary/90 hover:shadow"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
