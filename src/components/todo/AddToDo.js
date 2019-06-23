import React from 'react';

class CAddToDo extends React.Component {
  state = {
    title: ''
  }
  fOnChange = (e) => {
    this.setState({
      title: e.target.value
    });
  }
  fOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.pAddTodo(this.state);
      this.setState({ 
        title: ''
      });
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row text-white">
          <div className="col-sm-6 offset-sm-3 text-center">
            <form onSubmit={ this.fOnSubmit } className="justify-content-center">
              <div className="form-group">
                  <input type="title" className="form-control" onChange={ this.fOnChange } value={ this.state.title } />
              </div>
            </form>
          </div>
        </div>
      </div>
    ); 
	}
}

export default CAddToDo;