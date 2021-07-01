import { Route, Redirect } from 'react-router-dom'

// const user = null;
const user = {id: 1, username: 'Daniel22'};

export default function PrivateRoute({component: Component, ...rest}) {
    return (
        // <Route exact={props.exact} path={props.path} component={props.component} />
        <Route {...rest}>
            {user ? (<Component />) : (<Redirect to="/login" />)}
            
        </Route>
    )
}
