import React, {useState,useEffect} from 'react';
import DatePicker from  "react-datepicker"
//the below css is already available in datepicker package
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import DataTable from './DataTable'

const RetrievePage = () => {
//  let usersCollection = [];
  let [usersCollection, setUsersCollection] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  var [deleteFlag, setDeleteFlag] = useState(false);
  // const [value, setValue] = useState('');
  // const [id, setId] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("inside submit");
    console.log(startDate);
    var date = new Date(startDate);
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    //console.log([date.getFullYear(), mnth, day].join("-"));
    var params = [date.getFullYear(), mnth, day].join("-");
    console.log(typeof params);//type of params is String
    console.log(params);
    //this axios call is for retrieving all diary entries
    //axios.get('http://localhost:8080/api/diary')
    //this is the axios call for selected date
      axios.get(`http://localhost:8080/api/diary/${params}`)
          .then(res => {
            console.log(res);
            setUsersCollection(res.data);
          })
          .catch(function(error){
            console.log(error);
          })
  }//end handleSubmit

  const dataTable = () => {
    return usersCollection.map((data,i) => {
      return <DataTable obj = {data} key={i} />;
        //return <DataTable obj = {data} key={i} child={deleteFlag} parentMethod={useEffect} />;
    });
  }//end of dataTable

  //this method will be used by child when delete is pressed and the row has to be removed from state.
   //useEffect(() => {
  //   if(this.props.deleteFlag == true){
  //   //  const removeFromState = (date,deleteFlag) => {
  //       //console.log("Inside removeFromState method and date is:",date);
  //       axios.get(`http://localhost:8080/api/diary/${this.props.date}`)
  //           .then(response => {
  //             console.log(response);
  //             setUsersCollection(response.data);
  //           })
  //           .catch(function(error){
  //             console.log(error);
  //           })
  // //  }
  //
  // }
//})

    //console.log(id);
    // dataFromChild.map((record,i) => {
    //   console.log(record[i].id);
    //   console.log(record[i].date);
    // })
    //  if(deleteFlag){
        // useEffect(() =>{
        //   console.log("inside useEffect");
        //  const removeFromState = (dataFromChild,deleteFlag) =>{
        //  let filteredProducts = dataFromChild;
      //  }
    // },[deleteFlag])
    //    this.setState({
    // //   circuits: currentCircuits.filter(circuit => circuit.id !== circuitID),
    // // });
//     }
  // }

 return (
   <form onSubmit= {handleSubmit}>
   <h2>RETRIEVE DIARY ENTRIES </h2><br />
 <DatePicker selected={startDate} onChange={date => {setStartDate(date)}} /><br />
    <br/>
    <input type="submit" value="Submit" />
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Date</td>
          <td>Entry</td>
        </tr>
      </thead>
        <tbody>
          {dataTable()}
        </tbody>
    </table>

</form>
);//end of return
}//end of function
export default RetrievePage;

// <DatePicker
// selected={startDate}
// selectsStart
// startDate={startDate}
// endDate={endDate}
// onChange={date => setStartDate(date)} />
//
// <DatePicker
// selected={endDate}
// selectsEnd
// startDate={startDate}
// endDate={endDate}
// minDate={startDate}
// onChange={date => setEndDate(date)} />
