import "./styles/App.css";
import { Form } from "./components/Form";
import { Sidebar } from "./components/Sidebar";
import { FormProgress } from "./components/FormProgress";
import { useStateValue } from "./StateProvider";

function App() {

  const [state] = useStateValue();


  return (
    <div className="App">

      <header>
        <Sidebar>
          <FormProgress />
        </Sidebar>
        <pre style={{zIndex: 5, whiteSpace: "pre-wrap", color: 'black', background: "white", position: 'absolute', left: 0, top: '100%'}} >{`${JSON.stringify(state, undefined, 2)}\n`}</pre>
      </header>

      <main>
        <Form />
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
