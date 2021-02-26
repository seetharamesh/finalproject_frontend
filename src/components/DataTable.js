import React, {Component} from 'react';
import axios from 'axios';
import RetrievePage from './RetrievePage';

class DataTable extends Component{
state = {
    usersCollection: [],
    deleteFlag:false
}
   handleDelete = event => {
    console.log("inside handleDelete");
    console.log(this.props.obj.id);
    console.log("----- hidden logic done below");
    //getting the deleteFlag from parent as a prop
    console.log(this.props.child);
    const items = {
            id: this.props.obj.id,
            date: this.props.obj.date,
            entry:this.props.obj.entry
          };

    console.log("items are:", items);
    this.state.usersCollection.push(items);
    console.log("usersCollection looks like this:", this.state.usersCollection);
    //call parent method to update the state.
    //this.props.parentMethod(this.state.usersCollection,true);

    //make sure the axios call has backtick when passing parameters
    //Note that "this.props.obj.id" gets its value from handleSubmit() of retrieve page
    //so you can see console logs related to it.
    axios.delete(`http://localhost:8080/api/diary/${this.props.obj.id}`)
        .then(res => {
          console.log("****");
          console.log(res);
          this.setState({deleteFlag:true});
          console.log("resetting deleteFlag to true");
          console.log(this.state.deleteFlag);
          console.log(this.state.usersCollection);
          console.log("Calling parents method with date of ", items.date);
          this.handleRefresh();
        //  this.props.parentMethod(items.date,true);
          //this.setState.usersCollection = [];
          // const items = {
          //         id: res.data.id,
          //         date: res.data.date,
          //         entry:res.data.entry
          //       };
          //       console.log("items are:", items);
          //       this.setState.usersCollection.splice(items.id,1);
        })
        .catch(function(error){
          console.log(error);
        })
  }//end of handleDelete

  handleRefresh = event => {
    console.log("inside handleRefresh");
    axios.get(`http://localhost:8080/api/diary/${this.props.obj.date}`)
             .then(response => {
               console.log(response);
               this.setState({usersCollection:response.data});

             })
             .catch(function(error){
               console.log(error);
             })
             //this.forceUpdate();

  }


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
          <button onClick= {this.handleDelete}>Delete</button>
        </td>
        </tr>
    );
  }
}
export default DataTable;

//          {this.state.deleteFlag && this.handleRefresh}
