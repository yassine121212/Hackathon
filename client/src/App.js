import React from 'react'; 
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';




function App() {
	

  return (
    <>
    <div>
    <Router>
       <Routes>
        <Route path='/'  exact element={<Home/>} />
     </Routes>
    </Router>
    
    </div>
     </>
  );
}

export default App;
