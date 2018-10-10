import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { USER } from '../actions';
import { socket } from './../socket';

class BackNavbar extends React.Component {

	render(){
		const { match, room } = this.props;
		return (
			<nav className="navbar navbar-expand navbar-light bg-light mb-3">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to={`${match.path}/`}>Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to={`${match.path}/room`}>Rooms</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<Link to={`${match.path}/add-user`}>
						<button className="btn btn-success my-2 my-sm-0" type="button">Add</button>
					</Link>
				</form>
			</nav>
		)
	}
}


function getState(state){
	return state;
}

export default withRouter(connect(getState)(BackNavbar));