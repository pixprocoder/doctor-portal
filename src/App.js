import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
