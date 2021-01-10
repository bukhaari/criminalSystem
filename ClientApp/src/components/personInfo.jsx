import React from 'react';
import { Component } from 'react';
import PersonalTable from './personalInfoTable'
import Pagination from './common/pagination'
import SearchBox from './common/searchBox'
import { getMovies} from '../httpServices/fakeMovieService'
import { Card, Row, Col} from 'react-bootstrap';
import {Paginate} from '.././utils/paginate'
import Aux from ".././hoc/_Aux";
import _ from 'lodash';

class PersonalInfo extends Component {
    state ={
        movies:[],
        pageSize:4,
        currentPage:1,
        searchQuery:"",
        sortColumn:{path:"title", order:"asc"}
       };

    componentDidMount(){
    this.setState({movies: getMovies()});
    };

    handleSearch = query => {
        this.setState({searchQuery: query, selectGenre:"", currentPage:1 })
    };

    handleSort = sortColumn => {
        this.setState({sortColumn});
    };

    handleDelete = (movie) => {
        const movies = this.state.movies.filter( m => m._id !== movie._id );
        this.setState({ movies,currentPage:1})
    };

    handlePageChange = page => {
        this.setState({currentPage:page})
    };


    getPageData = () => {
        const {
            pageSize, 
            currentPage,
            selectGenre, 
            movies:allMovies, 
            sortColumn,
            searchQuery,
        } = this.state
       
       let filtter = allMovies
       if(searchQuery)
         filtter = allMovies.filter(m => 
            m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        // else if(selectGenre && selectGenre._id)
        //  filtter = allMovies.filter(m => m.genre._id === selectGenre._id)

       const sorted =   _.orderBy(filtter, [sortColumn.path], [sortColumn.order]);
       const movies = Paginate(sorted, currentPage, pageSize);
       return {  filtterlength:filtter.length , movies}

    };

    render() { 
        const {pageSize,currentPage, sortColumn, searchQuery} = this.state
        const count = this.state.movies.length;
        const {filtterlength, movies} = this.getPageData();
        return ( 
           <Aux>
           <Row>
               <Col>
                   <Card>
                       <Card.Header>
                       <Card.Title as="h5">Warbixinta shaqsiga</Card.Title>
                           <span className="d-block m-t-5">warbin <code>kooban</code> oo ku saabsan qofka</span>
                       </Card.Header>
                       <Card.Body>
                           {/* <Table responsive hover> */}
                        <div className="row">
                            <div className="col-9">
                            {count > 0 ?
                                <h5 className="boder">Show { filtterlength} Personal in database</h5>:
                                <h5>There are no Personal in Database</h5> }
                            </div>  

                            <div className="col-3">
                               {/* //this Component is a SearchBox of Movies of the table */}
                               <SearchBox value={searchQuery} onChange={this.handleSearch} />
                            </div>
                       
                           <div className="col-12 mt-3">
                           < PersonalTable
                               movies={movies} 
                               onDelete={this.handleDelete} 
                               currentPage={currentPage} 
                               pageSize={pageSize} 
                               onSort={this.handleSort}
                               sortColumn={sortColumn}
                               searchQuery={searchQuery}
                            />
                           </div>
                           
                            

                            <Pagination 
                                itemCount={filtterlength} 
                                currentPage={currentPage}
                                pageSize={pageSize}
                                onPageChange={this.handlePageChange}  
                            />
                        </div>
                            
                         
                           {/* </Table> */}
                       </Card.Body>
                   </Card>
                   </Col>
                </Row>
            </Aux>
         );
    }
}
 
export default PersonalInfo;
