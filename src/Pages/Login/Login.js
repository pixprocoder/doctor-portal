import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";

const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  if (user || gUser) {
    console.log("I am user");
  }

  if (loading || gLoading) {
    return <Loading />;
  }

  let element;
  if (error || gError) {
    element = (
      <p>
        Error: {error} {gError}
      </p>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  return (
    <section className="h-screen justify-center items-center flex">
      <div className="flex w-2/4 flex-col p-4 mx-auto shadow-lg rounded-md">
        <h1 className="text-center text-4xl my-4 ">Please Login</h1>
        <form onSubmit={handleLogin} className="w-full ">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="input input-accent w-full my-2  "
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            className="input input-accent w-full my-2 "
          />

          <p>{element}</p>

          <button className="btn btn-secondary block w-full my-2">LOGIN</button>
          <p className="text-center">
            New to doctor portal?{" "}
            <Link to="/signup">
              {" "}
              <small className="text-secondary">Create an account</small>
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <div className="w-full mx-auto ">
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary block w-full"
          >
            Continue with google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
