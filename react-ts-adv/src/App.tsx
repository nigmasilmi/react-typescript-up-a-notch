import Input from "./components/Input";
import Button from "./components/Button";
import Container from "./components/Container";
import InputWitFwRef from "./components/InputWithFwdRef";
import { useRef } from "react";
import Form from "./components/Form";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main>
      <article>
        <Input label="name" id="input-name" type="text" />
        <Input label="age" id="input-age" type="number" />
      </article>
      <article className="button-group">
        <Button>Click Me</Button>
        <Button href="http://google.com">Navigate from here</Button>
      </article>
      {/* polymorphic component */}
      <article>
        <Container as={Button}>click me again</Container>
        <Container as="article" className="parent-with-label">
          <div>I am his child</div>
        </Container>
      </article>
      <article>
        <InputWitFwRef label="input with fwd" id="input-fwd" ref={inputRef} />
      </article>
      <article>
        <Form>
          <fieldset>
            <legend>Do your thing</legend>
            <Input type="text" label="color" id="color-id" />
            <Input type="number" label="quantity" id="quantity-id" />
            <Button className="dressed-button">Send</Button>
          </fieldset>
        </Form>
      </article>
    </main>
  );
}

export default App;
