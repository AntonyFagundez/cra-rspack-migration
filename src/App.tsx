import './App.css';
import styles from "./App.module.scss";
import stylesRaw from "./App.module.scss?raw";

function App() {

  return (
    <div className="App">
      <style
        data-injected
        dangerouslySetInnerHTML={{
          // example to load css raw (maybe util for RSC)
          __html: stylesRaw
        }} />
      
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p className={styles.coso}>
          Example of sass
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
