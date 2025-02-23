import { BrowserRouter } from "react-router";
import { App } from "../App";

export const AppCSR = () => {
  return (
    <BrowserRouter basename='/React.js-kiso-4-v4'>
      <p>今はCSRです</p>
      <App />
    </BrowserRouter>
  );
};
