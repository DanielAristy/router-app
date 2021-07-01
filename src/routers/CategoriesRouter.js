import {  Route, Switch, Redirect, NavLink, useRouteMatch } from 'react-router-dom'
import Categories from '../components/Categories'
import NotFound from '../components/NotFound'
import PrivateRoute from '../routers/PrivateRoute'

export default function CategoriesRouter(){
    //Guardar la ruta anterior en este caso /categories
    const {url} = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to={`${url}`} activeClassName="active">All</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/terror`} activeClassName="active">Terror</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/action`} activeClassName="active">Action</NavLink>
                </li>
                <li>
                    <NavLink to={`${url}/anime`} activeClassName="active">Anime</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/categories" component={Categories} />
                <PrivateRoute
                 exact
                  path="/categories/terror"
                   component={() => <h1>Categories Terror</h1>} />
        
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