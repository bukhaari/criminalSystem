import React from 'react';
import TableBody from './tableBody'
import TableHeader from './tableHeader';


const  Table = ({onSort, sortColumn, Columns, data}) => {
    return( 
        <div>
             <table className="table table-sm table-hover table-responsive{-sm|-md|-lg|-xl} ">
                    <TableHeader Columns={Columns} onSort={onSort} sortColumn={sortColumn}  />
                    <TableBody data={data} Columns={Columns} />
                </table>
        </div>
        );
   
};

export default Table;

