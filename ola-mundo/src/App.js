import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a> <h1>Aprendendo React</h1>
        <img src="https://www.iguiecologia.com/wp-content/uploads/2021/02/Coruja-buraqueira7-2.jpg"></img>
        <h2>Símbolo da Sabedoria </h2>    
         <pre>
         Por influência da mitologia grega, tanto que Atena, <br></br>
         deusa da guerra e da sabedoria, tinha uma coruja como mascote.<br></br>
          Os gregos consideravam a noite como o momento do pensamento filosófico <br></br>
          e da revelação intelectual e a coruja, por ser uma ave noturna, <br></br>
         acabou representando essa busca pelo saber.
          </pre>
        </a>
      </header>
    </div>
  );
}

export default App;
