import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
  };

  return (
    <section className="h-screen justify-center items-center flex">
      <div className="flex flex-col w-2/4 p-4 mx-auto shadow-lg rounded-md">
        <h1 className="text-center text-4xl my-4 ">Please Sign Up</h1>
        <form onSubmit={handleSignup} className="w-full ">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="input input-accent w-full my-2  "
          />

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
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            className="input input-accent w-full my-2 "
          />

          <button className="btn btn-secondary block w-full my-2">LOGIN</button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/Login">
              {" "}
              <small className="text-secondary">Please login</small>
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
