import './App.css';
import { Container, Menu } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import FileValidation from './Pages/FileValidation';
import ShortestDistance from './Pages/ShortestDistance';
import Union from './Pages/Union';


function App() {
  return (
    <div className="background">
    <Router>
    <Menu inverted>
      <Container>
        <Menu.Item position="left">
        <Link to='/validfile'><Menu.Item name='Challenge1'/></Link></Menu.Item>
        <Menu.Item>
        <Link to='/shortdist'><Menu.Item name='Challenge2'/></Link></Menu.Item>
        <Menu.Item position="right">
        <Link to='/union'><Menu.Item name='Challenge3'/></Link></Menu.Item>
      </Container>
    </Menu>
    <Container>
      <Switch>
        <Route path="/validfile">
          <FileValidation/>
        </Route>
        <Route path="/shortdist">
          <ShortestDistance/>
        </Route>
        <Route path="/union">
          <Union/>
        </Route>
      </Switch>
    </Container>
    </Router>
    </div>
  );
}

export default App;
