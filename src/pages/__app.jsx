import React from "react";
require("dotenv").config();
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
