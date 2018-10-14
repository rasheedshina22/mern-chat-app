import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { socket } from './../socket';
import { CHATROOM, ROOM, CHANNEL } from './../actions';

import Setting from './back/Setting';
import Dashboard from './back/Dashboard';
import Room from './back/Room';
import Channel from './back/Channel';
import BackSidebar from './../components/BackSidebar';
import BackNavbar from './../components/BackNavbar';

class Back extends React.Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const { user } = this.props;
		socket.emit('authenticate', {
			username: user.username,
			token: user.token,
		});
	}

	render(){
		const { match } = this.props;

		return (
			<div className="container-fluid">
				<div className="row">
					<BackSidebar />
					<main role="main" className="nopadding">
						<BackNavbar />
						<div className="col">
							<Route exact path={`${match.path}/`} replace component={Dashboard} />
							<Route path={`${match.path}/room`} replace component={Room} />
							<Route path={`${match.path}/channel`} replace component={Channel} />
							<Route path={`${match.path}/setting`} replace component={Setting} />
						</div>
					</main>
				</div>
			</div>
		)
	}
}


function getState(state){
	return state;
}

export default withRouter(connect(getState)(Back));