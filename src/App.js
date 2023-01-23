import "./styles/App.css";
import { Form } from "./components/Form";
import { Sidebar } from "./components/Sidebar";
import { FormProgress } from "./components/FormProgress";
import { useState } from "react";

function App() {

  const [step, setStep] = useState(3);

  return (
    <div className="App">

      <header>
        <Sidebar>
          <FormProgress state={{'step': step}} />
        </Sidebar>
      </header>

      <main>
        <Form state={{'step': step, 'setStep': setStep}} />
      </main>

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.frontendmentor.io/profile/ianbuen">@ianbuen</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
