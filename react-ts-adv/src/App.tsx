import Input from "./components/Input";
import Button from "./Button";
function App() {
  return (
    <main>
      <Input label="name" id="input-name" type="text" />
      <Input label="age" id="input-age" type="number" />
      <div className="button-group">
        {/* implementing the type predicate also
leaves the issue that an anchor could receive a btn property and viceversa */}
        <Button>Click Me</Button>
        <Button href="http://google.com">Navigate from here</Button>
      </div>
    </main>
  );
}

export default App;
