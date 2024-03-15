import React from "react";
import Layout from "./layout/Layout";

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
      <Layout/>

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
