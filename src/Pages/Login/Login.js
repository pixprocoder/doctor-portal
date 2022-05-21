import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    data.reset();
  };
  var errorMassage;
  if (error || gError) {
    errorMassage = (
      <p className="text-red-500">{error?.massage || gError?.massage}</p>
    );
  }

  if (loading || gLoading) {
    return <Loading />;
  }
  if (user || gUser) {
    console.log("user found");
  }

  return (
    <section className=" flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-extrabold text-center">LOGIN</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span class="label">Email</span>
            </label>
            <input
              className="input input-bordered w-full "
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />

            <label>
              {errors.email?.type === "required" && (
                <span class="label">{errors.email.massage}</span>
              )}
            </label>

            <label>
              <span class="label">Password</span>
            </label>
            <input
              className="input input-bordered w-full "
              name="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && "password  is required"}
            <p>{errorMassage}</p>
            <input className="btn btn-secondary w-full mt-10" type="submit" />
          </form>
          <p>
            New to Doctors Portal?{" "}
            <Link className="text-primary" to="/signup">
              Please SIGNUP
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-secondary"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
