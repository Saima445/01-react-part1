import ReactDOM from "react-dom/client";
import App from "./App.jsx";

let counter = 1;
console.log(counter);

const root = ReactDOM.createRoot(document.getElementById("root"));

const refresh = () => {
  root.render(<App counter={counter} />);
};

setInterval(() => {
  refresh();
  counter += 1;
  console.log(counter);
}, 1000);
