import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './pages/index/index';
import About from './pages/about/about';
import Admin from './pages/admin/admin';
import General from './pages/admin/general/general';
import User from './pages/admin/user/user';

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Index} exact />
					<Route path='/admin' component={Admin} exact />
					<Route path="/admin/general" component={General} exact />
					<Route path="/admin/user" component={User} exact />
				</Switch>
			</Router>
		);
	}
}
export default AppRouter;