import React from 'react';
import './footer.scss';

class CFooter extends React.Component {
  render() {
    return (
      <footer className="footer py-3">
        <div className="container">
          <span className="text-muted">{ this.props.children }</span>
        </div>
      </footer>
    );
	}
}

export default CFooter;