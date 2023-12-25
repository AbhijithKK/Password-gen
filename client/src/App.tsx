import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/SignUp";


function App() {
  return (
  <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/signup" element={ <SignUp/> }/>
  <Route path="/home" element={ <Home/> }/>

</Routes>
</BrowserRouter>

 
  
  </>);
}

export default App;
