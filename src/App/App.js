import './App.css';
import Button from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <Button text="Voici le corps du bouton" backgroundColor="skyblue" color="white"/>
      <Button text="default"/>
    </div>
  );
}

export default App;
