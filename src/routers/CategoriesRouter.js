import {  Route, Switch, Redirect, NavLink, useRouteMatch, Link } from 'react-router-dom'
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
                <Route exact path={`${url}`} component={Categories} />
                <PrivateRoute path={`${url}/terror`} component={TerrorRouter} />
                <Route exact path={`${url}/action`}>
                    <h1>Categories Action</h1>
                </Route>
                <Route exact path={`${url}/anime`}>
                    <h1>Categories Anime</h1>
                </Route>
                <Route path="*" component={NotFound}>
                        <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
        
    )
}

function TerrorRouter(){
    //En este caso de utliza para la ruta /categories/terror
    const {url} = useRouteMatch();
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}`}>All</Link>
                </li>
                <li>
                    <Link to={`${url}/gore`}>Gore</Link>
                </li>
                <li>
                    <Link to={`${url}/suspense`}>Suspense</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path={`${url}`}>
                    <h3>Category terror 3</h3>
                </Route>
        
                <Route exact path={`${url}/gore`}>
                    <h3>Gore</h3>
                </Route>
                <Route exact path={`${url}/suspense`}>
                    <h3>Suspense</h3>
                </Route>
                <Route path="*">
                        <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    );
}