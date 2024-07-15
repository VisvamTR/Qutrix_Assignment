import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChartComponent from './components/ChartComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ChartComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
