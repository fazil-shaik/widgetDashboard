import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import
import HomePage from './Components/HomePage';
import Dashboard from './Components/Dashboard';
import AddWidgetForm from './Components/AddWidgetForm';
import { initialWidgetData } from './data/widgetData';
import './App.css';

function App() {
  const [widgetData, setWidgetData] = React.useState(initialWidgetData);
  const [isFormVisible, setFormVisible] = React.useState(false);

  const addWidget = (category, newWidget) => {
    setWidgetData(prevData => ({
      ...prevData,
      [category]: [...(prevData[category] || []), newWidget]
    }));
    setFormVisible(false);
  };

  const removeWidget = (category, widgetId) => {
    setWidgetData(prevData => ({
      ...prevData,
      [category]: prevData[category].filter(widget => widget.id !== widgetId)
    }));
  };

  return (
    <Router>
      <div className="App">
        <Routes> {/* Update Routes component */}
          <Route path="/" element={<HomePage />} /> {/* Update Route */}
          <Route 
            path="/dashboard" 
            element={
              <>
                <Dashboard widgetData={widgetData} removeWidget={removeWidget} />
                <AddWidgetForm 
                  isVisible={isFormVisible} 
                  addWidget={addWidget} 
                  closeForm={() => setFormVisible(false)} 
                  categories={Object.keys(widgetData)} 
                />
              </>
            } 
          />
        </Routes>
        <button className="toggle-button" onClick={() => setFormVisible(true)}>
          +
        </button>
      </div>
    </Router>
  );
}

export default App;
