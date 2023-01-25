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
      {/* <p style={{color: 'white', backdropFilter: 'blur(100px)', position: 'absolute', left: 0, top: 0}} >{`${JSON.stringify(state)}\n`}</p> */}
      <pre style={{zIndex: 5, whiteSpace: "pre-line", color: 'black', background: "white", position: 'absolute', left: 0, bottom: '5%'}} >{`${JSON.stringify(state, undefined, 2)}\n`}</pre>
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
