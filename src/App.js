import DropdownSelect from "./components/DropdownSelect"
import './App.css';

const options = ['shoes', 'bags', 'wallet', 'bottle'];

function App() {
  return (
    <div className="App">
      <DropdownSelect options={options} />
    </div>
  );
}

export default App;
