import React from 'react';

class CAddToDo extends React.Component {
  state = {
    text: ''
  }
  fOnChange = (e) => {
    this.setState({
      text: e.target.value,
      isDeleted: 0,
      isDone: 0
    });
  }
  fOnSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      this.props.pAddTodo(this.state);
      this.setState({ 
        text: '' 
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
                  <input type="text" className="form-control" onChange={ this.fOnChange } value={ this.state.text } />
              </div>
            </form>
          </div>
        </div>
      </div>
    ); 
	}
}

export default CAddToDo;