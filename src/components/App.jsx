// import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Header from "./Header";
// import CreateArea from "./CreateArea";
// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route / > 
//       </Routes> 
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import CreateArea from './CreateArea';

const App = () => {
  return (
    <div className="app">
      <div className="header">
        <h1>dataInsightsX</h1>
      </div>
      <div className="middle-pane">
        <CreateArea />
      </div>
      <div className="footer">
        <p>Copyright &copy; 2023</p>
      </div>
    </div>
  );
};

export default App;

