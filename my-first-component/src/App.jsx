import Button from "./Button";
import Hello from "./Hello";
import Random from "./Random";

// This is functional based component
function App() {
  return (
    <div>
      <h1>This is Hello World</h1>
      <button>Subscribe</button>
      <Button />
      <Hello />
      <Random />
    </div>
  );
}

export default App;
