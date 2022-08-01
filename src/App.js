import './App.css';
import Todolist from './components/Todolist/Todolist';
import {Routes, Route} from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Todolist />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
