import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import LoggedHome from '../pages/LoggedHome';
import Register from '../pages/Register';
import Users from '../pages/Users';


const MainRouter = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/loggedhome" component={LoggedHome}/>
                    <Route path="/registrazione" component={Register}/>
                    <Route path="/users" component={Users}/>
                </Switch>
            </Router>
        </>
    )
}

export default MainRouter;