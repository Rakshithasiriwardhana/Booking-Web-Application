import React from "react";
import Header from "./component/header/Header";
import Footer from "./component/Footer/Footer";
// import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/doctor/Doctors";
import DoctorDetails from "./pages/doctor/DoctorDetails";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import PasswordReset from "./pages/PasswordReset";
import Register from "./pages/Register";
// import Navbar from "./component/header/Navbar";

// import Layout from "./layout/Layout";
// import About from "./pages/About";
// import Appointment from "./pages/Appointment";
// import Contact from "./pages/Contact";
// import Dashboard from "./pages/Dashboard";
// import GoogleMapEmbed from "./pages/GoogleMapEmbed";
// import Medical from "./pages/Medical";
// import Register from "./pages/Register";
// import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">      
      <BrowserRouter>
        <Header />
        {/* <Navbar/> */}
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetails />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/Passreset" element={<PasswordReset/>} />
          <Route path="/docregister" element={<Register/>} />
          
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <SignIn />
      <Contact/>
      <Register />
      <Reset/>
      <Dashboard />
      <Appointment />
      <Medical />
      <About /> */}
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/reset">Reset</Link>
//             </li>
//             <li>
//               <Link to="/dashboard">Dashboard</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/login">
//             <Login />
//           </Route>
//           <Route path="/reset">
//             <PasswordReset />
//           </Route>
//           <Route path="/dashboard">
//             <Dashboard />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function Login() {
//   return <h2>Login</h2>;
// }

// function PasswordReset() {
//   return <h2>Password Reset</h2>;
// }

// function Dashboard() {
//   return <h2>Dashboard</h2>;
// }
