import React, { Component } from 'react';
import Table from './common/table';

class PersonalInfoTable extends Component {
    Columns =[
        {path:"title", label:"Title"},
        {path:"genre.name", label:"Genre"},
        {path:"numberInStock", label:"Stock"},
        {path:"dailyRentalRate", label:"Rate"},
        {key:"Delete", content: movie=>  <button onClick={() => this.props.onDelete(movie)} className="btn btn-danger">Delete</button>, label:"" },
    ]
    render() { 
        const { movies, onSort, sortColumn } = this.props;
        return  ( 
            <div>
                 <Table data={movies} Columns={this.Columns} onSort={onSort} sortColumn={sortColumn}   />
                 {movies.length === 0 && <div> <h4 className="text-center">
                      <i className="fa fa-search fa-lg"></i></h4>  
                      <i className="fa fa-laugh"></i>
                      <h4 className="text-muted text-center"> Sory, nothing in the database </h4>
                 </div> }
            </div>

          );
    }
}
 
export default PersonalInfoTable;
  