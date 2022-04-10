import React from 'react';
import {useSelector} from 'react-redux'
import Login from './Views/Pages/Login/login'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sidebar from './Views/sidebar/sidebar'
import ViewBugPage from "./Views/Pages/viewBugs";
import CreateBug from "./Views/Components/bugCard/BugCreateEdit/bugForm"



function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
    { !auth.LoggedIn ? <Login /> : 
    <>
    <Sidebar />
    <Switch>
    <Route path='/viewbugs'><ViewBugPage/></Route>
    <Router path='/createbugs'><div className='page-container'><CreateBug title='Create Bug'/></div></Router>
    </Switch>
    
    </>
    }
    </Router>
  );
}

export default App;
