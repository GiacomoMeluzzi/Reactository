import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

const MainRouter = () => {

    return (
        <>
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </Router>
        </>
    )
}

export default MainRouter;