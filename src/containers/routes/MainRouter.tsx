import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import LoggedHome from '../components/pages/LoggedHome';
import Register from '../components/pages/Register';
import Users from '../components/pages/Users';
import PrivateRoute from './PrivateRoute';

const MainRouter = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute>
                        <Route path="/home" component={Home}/>
                        <Route path="/loggedhome" component={LoggedHome}/>
                        <Route path="/registrazione" component={Register}/>
                        <Route path="/users" component={Users}/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    )
}

export default MainRouter;