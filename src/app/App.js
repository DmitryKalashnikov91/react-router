

import NavBar from './components/navBar';
import { Route} from 'react-router-dom';
import Dashboard from './components/dashboard';
import Home from './components/home';
import Login from './components/login';
import Posts from './components/posts';
import Stats from './components/stats';

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
     
        <Route path='/dashboard/stats' component={Stats} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/login' component={Login} />
        <Route path='/posts' component={Posts} />
        <Route path='/' exact component={Home} />
       
    </div>
  );
}

export default App;
