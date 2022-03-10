/* /context/AppContext.js */

import React from "react";
// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext({
  isAuthenticated: false,
  user: null,
  foto: "/profile.png",
  token: "",
});
export default AppContext;
