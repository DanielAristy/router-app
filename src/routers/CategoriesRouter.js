import {  Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Categories from '../components/Categories'
import NotFound from '../components/NotFound'

export default function CategoriesRouter(){
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/categories" activeClassName="active">All</NavLink>
                </li>
                <li>
                    <NavLink to="/categories/terror" activeClassName="active">Terror</NavLink>
                </li>
                <li>
                    <NavLink to="/categories/action" activeClassName="active">Action</NavLink>
                </li>
                <li>
                    <NavLink to="/categories/anime" activeClassName="active">Anime</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/categories/terror">
                    <h1>Categories Terror</h1>
                </Route>
                <Route exact path="/categories/action">
                    <h1>Categories Action</h1>
                </Route>
                <Route exact path="/categories/anime">
                    <h1>Categories Anime</h1>
                </Route>
                <Route path="*" component={NotFound}>
                        <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
        
    )
}