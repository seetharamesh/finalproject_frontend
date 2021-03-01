import React, {Component} from 'react';
import axios from 'axios';
import RetrievePage from './RetrievePage';
import ShowModal from './ShowModal';
import Button from "react-bootstrap/Button";

/*This is the main component that handles delete, update functionality and table data is displayed*/
class DataTable extends Component{

/* Delete Functionality*/
   handleDelete = event => {
    axios.delete(`http://localhost:8080/api/diary/${this.props.obj.id}`)
        .then(res => {
          console.log(res);
          //Very important this will perform the automatic refresh..the axios call above deletes the record from database
          //We need the same to be taken away from display screen too. This prop(retrieveData) is passed from RetrievePage.
          //It's basically calling the submit functionality in retrieve page
          this.props.handleRefresh();
        })
        .catch(function(error){
          console.log(error);
        })
  }//end of handleDelete

  render(){
    return(
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.date}
        </td>
        <td>
          {this.props.obj.entry}
        </td>
        <td>
          <button type="button" class="btn btn-danger" aria-label="Left Align" onClick= {this.handleDelete}>
           <span class="fa fa-trash-o fa-lg" aria-hidden="true"></span>
           </button>
        </td>
        <td>
          <ShowModal id={this.props.obj.id} entry={this.props.obj.entry} date = {this.props.obj.date} handleRefresh = {this.props.handleRefresh} />
        </td>
        </tr>
    );
  }
}
export default DataTable;



{/*
   */}
