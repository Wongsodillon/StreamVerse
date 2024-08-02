import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/login.css";
import Logsvg from "../assets/log.svg";
import Regisvg from "../assets/register.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import { AppDispatch } from "../app/store";
import axios from "axios";

type userProp = {
  username: string;
  email: string;
  password: string;
  role: string;
};

const Login: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      navigate("/Admin");
    }
    // if (user || isSuccess) {
    //   navigate("/Admin");
    // }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const saveUser = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
        name: name,
        email: email,
        password: password,
        role: "user",
      });
      navigate("/Admin");
    } catch (error: any) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  const Auth = (e: any) => {
    e.preventDefault();
    const User: userProp = {
      username: "",
      email: email,
      password: password,
      role: "role",
    };
    dispatch(LoginUser(User));
  };

  useEffect(() => {
    const sign_in_btn =
      document.querySelector<HTMLButtonElement>("#sign-in-btn");
    const sign_up_btn =
      document.querySelector<HTMLButtonElement>("#sign-up-btn");
    const container = document.querySelector<HTMLDivElement>(".containers");

    const handleSignUpClick = () => {
      if (container) {
        container.classList.add("sign-up-mode");
      }
    };

    const handleSignInClick = () => {
      if (container) {
        container.classList.remove("sign-up-mode");
      }
    };

    if (sign_up_btn && sign_in_btn && container) {
      sign_up_btn.addEventListener("click", handleSignUpClick);
      sign_in_btn.addEventListener("click", handleSignInClick);
    }

    return () => {
      if (sign_up_btn && sign_in_btn && container) {
        sign_up_btn.removeEventListener("click", handleSignUpClick);
        sign_in_btn.removeEventListener("click", handleSignInClick);
      }
    };
  }, []);

  return (
    <div className="Login containers full-screen">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={Auth} action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input type="submit" value="Login" className="btns solid" />
            {/* <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
          <form onSubmit={saveUser} action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <input type="submit" className="btns" value="Sign up" />
            {/* <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div> */}
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Enhance your job searching experience with CareerSpots!</p>
            <button className="btns transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={Logsvg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>Sign in to your account!</p>
            <button className="btns transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={Regisvg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
