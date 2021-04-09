import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import PageWrapper from './PageWrapper';
import ReplaceMe from './pages/ReplaceMe';

const history = createBrowserHistory();

const Routes = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route exact path='/' render={ () => <PageWrapper page={ReplaceMe} /> } />
			</Switch>
		</Router>
	);
}

export default Routes;