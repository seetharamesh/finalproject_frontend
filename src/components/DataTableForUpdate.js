import React, {Component} from 'react';


class DataTableForUpdate extends Component{

 handleChange = event => {
  console.log("inside handlechange");
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
          <button onClick={() => console.log("row to be edited is " , this.props.obj.id) }>Edit</button>
        </td>
        </tr>
    );
  }
}

export default DataTableForUpdate;

// <td>
//   {this.props.obj.entry}
// </td>
