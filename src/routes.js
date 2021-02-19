import React from "react";

import Home from './components/pages/Home';

const routes = [
  { name: "Home", path: "/", authNeeded: false, exact: true, main: () => <Home /> },  
];

export default routes;