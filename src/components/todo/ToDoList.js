import React from 'react';

class CToDoList extends React.Component {
  pDone = (id) => {
    this.props.pDoneToDo(id);
  }
  pDelete = (id) => {
    this.props.pDeleteToDo(id);
  }
  pShowHide = () => {
    this.props.pShowHide();
  }
  render() {
    let toDoItems = this.props.pToDoItems;
    toDoItems.sort((a,b) => a.id > b.id ? 1 : -1).reverse();

    let renderItem = toDoItems ? toDoItems.map(tItem => {

      if(tItem.completed === false || this.props.pShowHideValue === true) {
        let cclass = (tItem.completed === true ? "list-group-item-success" : "");
        cclass = cclass + " list-group-item d-flex justify-content-between align-items-center my-2 p-0";

        return (
          <li key={tItem.id} className={cclass}>
            <span className="border-right p-2 todoDone" onClick={ () => { this.pDone(tItem.id) } }><i className="fa fa-check" aria-hidden="true"></i></span> 
            <span className="flex-grow-1 ml-2 text-truncate">{ tItem.title }</span>    
            <span className="border-left p-2 todoDelete" onClick={ () => { this.pDelete(tItem.id) } }><i className="fa fa-trash" aria-hidden="true"></i></span>
          </li>
        )
        
      }
      else {
        return "";
      }

    }) : null;

    let totalCount = toDoItems ? toDoItems.length : 0;
    let doneCount =  toDoItems ? toDoItems.filter(f => f.completed === true).length : 0;
    let waitingCount = (totalCount - doneCount);

    return ( 
      <div className="container">
        <div className="row">
          <ul className="col-sm-6 offset-sm-3 text-left">
            { renderItem }
          </ul>
          <div className="col-sm-6 offset-sm-3 text-center">
            <span className="font-weight-bold">Toplam:</span>{totalCount} <span className="font-weight-bold">Bekleyen:</span>{waitingCount} <span className="font-weight-bold">Tamamlanan:</span>{doneCount} 
          </div>
          <div className="col-sm-6 offset-sm-3 text-center">
            <button type="button" className="btn btn-link btn-sm" onClick={ () => { this.pShowHide()} }>Tamamlananları Göster/Gizle</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CToDoList;