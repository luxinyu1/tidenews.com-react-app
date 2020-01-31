import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Index from './pages/index/index';
import About from './pages/about/about';
import Admin from './pages/admin/admin';

class AppRouter extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path='/' component={Index} exact />
					<Route path='/admin' component={Admin} />
				</Switch>
			</Router>
		);
	}
}
export default AppRouter;