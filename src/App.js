import React from 'react';
import './App.css';
import NavigaitonBar from './components/NavigationBar/NavigaitonBar';

// 라우팅 관련
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bang from './pages/Bang/Bang';
import Bab from './pages/Bab/Bab';
import Community from './pages/Community/Community';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavigaitonBar />
          <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/Bab' component={Bab} />
            <Route path='/Bang' component={Bang} />
            <Route path='/Community' component={Community} />

            {/* <Route component={() => <Redirect to="/" />} /> */}
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
