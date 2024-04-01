import Input from "./components/Input";
import Button from "./Button";
function App() {
  return (
    <main>
      <Input label="name" id="input-name" type="text" />
      <Input label="age" id="input-age" type="number" />
      <div className="button-group">
        // what about not needing to add that el property each time // the next
        solution focuses on that
        <Button>Click Me</Button>
        <Button href="http://google.com">Navigate from here</Button>
      </div>
    </main>
  );
}

export default App;
