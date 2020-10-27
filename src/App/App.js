import './App.css';
import Button from './components/Button/Button'

function App() {
  const maValue='124';
  return (
    <div className="App">
      <Button text="Voici le corps du bouton" backgroundColor="skyblue" color="white"/>
      <Button text="default" onClick={()=>{console.log(maValue)}}/>
    </div>
  );
}

export default App;
