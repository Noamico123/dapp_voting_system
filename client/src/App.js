import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Elections from './Components/Elections';
import ElectionsList from './Components/ElectionsList';
import WelcomeComponent from './Components/WelcomeComponent';
import NewPoll from './Components/NewPoll';
import SurveyList from './Components/SurveyList';
import Survey from './Components/Survey';

function App() {

  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">Election-DAPP</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href="/new_poll">New Poll</Nav.Link>
                <Nav.Link href="/election_list">Election List</Nav.Link>
                <Nav.Link href="/survey_list">Survey List</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<WelcomeComponent/>}/>
        <Route path='/new_poll' element={<NewPoll/>}/>
        <Route path='/election_list' element={<ElectionsList/>}/>
        <Route path='/elections' element={<Elections/>}/>
        <Route path='/survey_list' element={<SurveyList/>}/>
        <Route path='/survey' element={<Survey/>}/>
      </Routes>
  </Router>
  );
}

export default App;
