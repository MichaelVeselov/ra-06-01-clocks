import './App.css';
import { useState } from 'react';
import AddForm from './components/AddForm';
import ClocksList from './components/ClocksList';
import nextId from 'react-id-generator';

const startData = [
  { id: nextId(), name: 'New York', timeZone: -4 },
  { id: nextId(), name: 'Moscow', timeZone: 3 },
  { id: nextId(), name: 'London', timeZone: 1 },
  { id: nextId(), name: 'Tokyo', timeZone: 9 },
];

function App() {
  const [clocks, setClocks] = useState(startData);

  function addClock(data) {
    if (data.name === '' || data.timeZone === '') return null;

    const newClock = {
      id: nextId(),
      name: data.name,
      timeZone: data.timeZone,
    };

    setClocks((prevState) => [...prevState, newClock]);
  }

  function deleteClock(id) {
    setClocks((prevState) => prevState.filter((clock) => clock.id !== id));
  }

  return (
    <div className='App'>
      <AddForm onSubmit={addClock} />
      <ClocksList clocks={clocks} onDelete={deleteClock} />
    </div>
  );
}

export default App;
