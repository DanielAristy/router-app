import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Login from '../components/Login'
import Register from '../components/Register'
import Dashboard from '../components/Dashboard'
import Payments from '../components/Payments'
import CategoriesRouter from './CategoriesRouter'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/categories" component={CategoriesRouter} />
                <Route exact path="/signin">
                    <Redirect to="/login" />
                </Route>
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/register" component={Register} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/payments" component={Payments} />
                <Route exact path="/profile/:username" component={Profile} />
                <Route exact path="/" component={Home} />
                <Route path="/404" component={NotFound} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </Router>
    )
}
