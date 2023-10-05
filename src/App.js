import "./App.css"; 
import {Routes, Route} from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import Messages from "./components/Messages";
import Settings from "./components/Settings";

function App() {
  return (
   
  <div className="flex min-h-screen w-screen flex-col">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Dashboard/>} /> 
        <Route path="/reports" element={<Reports/>} />
        <Route path="/messages" element={<Messages/>} />
        </Route>
      <Route path="/settings" element={<Settings/>} />
      
    </Routes>
  </div> 

  
    
  );
}

export default App;
