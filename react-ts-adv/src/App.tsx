import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import InputWitFwRef from "./components/InputWithFwdRef";
import { useRef } from "react";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <Input label="name" id="input-name" type="text" />
      <Input label="age" id="input-age" type="number" />
      <div className="button-group">
        <Button>Click Me</Button>
        <Button href="http://google.com">Navigate from here</Button>
      </div>
      {/* polymorphic component */}
      <Container as={Button}>click me again</Container>
      <Container as="article" className="parent-with-label">
        <div>I am his child</div>
      </Container>
      <InputWitFwRef label="input with fwd" id="input-fwd" ref={inputRef} />
    </main>
  );
}

export default App;
