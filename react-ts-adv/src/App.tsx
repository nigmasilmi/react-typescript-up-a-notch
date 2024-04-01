import Input from "./components/Input";
import Button from "./Button";
function App() {
  return (
    <main>
      <Input label="name" id="input-name" type="text" />
      <Input label="age" id="input-age" type="number" />
      <div className="button-group">
        <Button el="button">Click Me</Button>
        <Button el="anchor" href="http://google.com">
          Navigate from here
        </Button>
      </div>
    </main>
  );
}

export default App;
