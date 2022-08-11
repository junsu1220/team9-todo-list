import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../../redux/modules/authContext";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_firebase}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_firebase}`;
    }
    axios(url, {
      method: "POST",
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.ok);
        setIsLoading(false);
        dispatch(authActions.login(res.data.idToken));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "로그인" : "회원가입"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? "로그인" : "회원가입"}</button>}
          {isLoading && <p>sending request...</p>}
          <button type="button" onClick={switchAuthModeHandler}>
            {isLogin ? "회원가입" : "기존의 이메일로 로그인하기"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
