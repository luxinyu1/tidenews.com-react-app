import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './pages/index/index';
import About from './pages/about/about';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Admin from './pages/admin/admin';
import General from './pages/admin/general/general';
import User from './pages/admin/user/user';
import Review from './pages/admin/review/review';
import Write from './pages/admin/write/write'

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Index} exact />
					<Route path='/about' component={About} exact />
					<Route path="/register" component={Register} exact />
					<Route path="/login" component={Login} exact />
					<Route path='/admin' component={Admin} exact />
					<Route path="/admin/general" component={General} exact />
					<Route path="/admin/user" component={User} exact />
					<Route path="/admin/review" component={Review} exact />
					<Route path="/admin/write" component={Write} exact />
				</Switch>
			</Router>
		);
	}
}
export default AppRouter;