import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { all } from 'axios'
import GetTrainer from './component/getTrainer'
import AddTrainer from './component/addTrainer'
import EditTrainer from './component/editTrainer'

function App() {
  // const [count, setCount] = useState(0)
  const [trainers, setTrainers] = useState([]);
  // Fetch trainers data when the component mounts
   useEffect(() => {
    const fetchTrainers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/trainers/');
        setTrainers(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };
    fetchTrainers();
  }, []);

  const handleAddTrainer = (newTrainer) => {
    setTrainers([...trainers, newTrainer]);
  };

  const handleUpdateTrainer = (updatedTrainer) => {
    const updatedTrainers = trainers.map((trainer) =>
      trainer._id === updatedTrainer._id ? updatedTrainer : trainer
    );
    setTrainers(updatedTrainers);
  };

  const handleDeleteTrainer = async (trainerId) => {
    try {
      // Call your backend API to delete the trainer (if you have a backend)
      await axios.delete(`http://localhost:3000/api/trainers/${trainerId}`);

      // If successful, remove the trainer from the state
      setTrainers(trainers.filter((trainer) => trainer._id !== trainerId));
    } catch (error) {
      console.error('Error deleting trainer:', error);
    }
  };

  return (
    <Router>
      <div className="container">
        <h1>Trainer Management</h1>
        <nav>
          <Link to="/">Trainer List</Link> | <Link to="/add-trainer">Add Trainer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<GetTrainer trainers={trainers} onDeleteTrainer={handleDeleteTrainer} />} />
          <Route path="/add-trainer" element={<AddTrainer onAddTrainer={handleAddTrainer} />} />
          <Route path="/edit-trainer/:id" element={<EditTrainer trainers={trainers} onUpdateTrainer={handleUpdateTrainer} />} />
          <Route path="/delete-trainer/:id" element={<EditTrainer trainers={trainers} onUpdateTrainer={handleUpdateTrainer} />} />
        </Routes>
      </div>
    </Router>
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  );
}

export default App;
