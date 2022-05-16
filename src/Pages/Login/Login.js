import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log("connected");
  }
  return (
    <div>
      <button onClick={signInWithGoogle}>Continue with google</button>
    </div>
  );
};

export default Login;
