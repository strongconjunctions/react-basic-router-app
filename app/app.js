import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// Components
import Posts from 'ui/posts';
import Users from 'ui/users';
import Home from 'ui/home';
import Footer from 'ui/footer';

class App extends React.Component {
	render() {
		return (
			<div>
			    <Router history={browserHistory}>
			        <Route path="/" component={Home} />
			        <Route path="/posts" component={Posts} />
			        <Route path="/users" component={Users} />
			    </Router>
			    <Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));