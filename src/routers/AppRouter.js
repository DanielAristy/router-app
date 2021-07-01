import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import Navbar from '../components/Navbar'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    )
}
