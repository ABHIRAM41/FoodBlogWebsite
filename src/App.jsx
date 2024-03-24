import "./App.css";
import { First } from "./components/First";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { Forth } from "./components/Forth";

function App() {
  return (
    <div className="App">
      <First />
      <Second />
      <Third />
      <Forth />
      {/* <Fifth/> */}
    </div>
  );
}

export default App;
