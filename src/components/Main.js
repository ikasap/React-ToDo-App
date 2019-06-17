import React from 'react';

class CMain extends React.Component {
	render() {
		return (
			<main role="main" className="flex-shrink-0">
				<div className="container">
					{ this.props.children }
				</div>
      </main>
		);
	}
}

export default CMain;