import React from 'react';

class CHeader extends React.Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
					<span className="navbar-brand">{ this.props.pTitle }</span>
				</nav>
			</header>
		);
	}
}

export default CHeader;