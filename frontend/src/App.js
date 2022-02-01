import React from "react";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";
import Routes from "./Routes";
import Nav from "react-bootstrap/Nav";
//import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App container py-3">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          Scratch
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <LinkContainer to="/">
//           <Navbar.Brand className="font-weight-bold text-muted">
//             Scratch
//           </Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav activeKey={window.location.pathname}>
//             <LinkContainer to="/signup">
//               <Nav.Link>Signup</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <Navbar.Brand href="/" className="font-weight-bold text-muted">
//           Scratch
//         </Navbar.Brand>
//         <Navbar.Toggle />
//         <Navbar.Collapse className="justify-content-end">
//           <Nav>
//             <Nav.Link href="/signup">Signup</Nav.Link>
//             <Nav.Link href="/login">Login</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <LinkContainer to="/">
//           <Navbar.Brand className="font-weight-bold text-muted">
//             Scratch
//           </Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle />

//         <Navbar.Collapse className="justify-content-end">
//           <Nav activeKey={window.location.pathname}>
//             <LinkContainer to="/signup">
//               <Nav.Link>Signup</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <LinkContainer to="/">
//           <Navbar.Brand className="font-weight-bold text-muted">
//             Scratch
//           </Navbar.Brand>
//         </LinkContainer>
//         <Navbar.Toggle />
//         {/* <Navbar.Collapse>
//           <Nav pullRight>
//             <IndexLinkContainer to="/signup">
//               <NavItem>Signup</NavItem>
//             </IndexLinkContainer>
//             <IndexLinkContainer to="/login">
//               <NavItem>Login</NavItem>
//             </IndexLinkContainer>
//           </Nav>
//         </Navbar.Collapse> */}
//         <Navbar.Collapse className="justify-content-end">
//           <Nav activeKey={window.location.pathname}>
//             <LinkContainer to="/signup">
//               <Nav.Link>Signup</Nav.Link>
//             </LinkContainer>
//             <LinkContainer to="/login">
//               <Nav.Link>Login</Nav.Link>
//             </LinkContainer>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Routes />
//       {/* <Switch>
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/signup" component={Signup} />
//         <Route exact path="/" component={Home} />
//       </Switch> */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App container py-3">
//       <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
//         <Navbar.Brand className="font-weight-bold text-muted">
//           Scratch
//         </Navbar.Brand>
//         <Navbar.Toggle />
//       </Navbar>
//       <Routes />
//     </div>
//   );
// }
// export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and vista to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
