import React from "react";

const Signup = () => {
  return (
    <section className=" flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-extrabold text-center">SIGNUP</h2>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-secondary">
            Continue with Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Signup;
