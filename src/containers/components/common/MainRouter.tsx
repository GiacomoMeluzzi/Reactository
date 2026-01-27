import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import LoggedHome from '../pages/LoggedHome';


const MainRouter = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/loggedhome" component={LoggedHome}/>
                </Switch>
            </Router>
        </>
    )
}

export default MainRouter;