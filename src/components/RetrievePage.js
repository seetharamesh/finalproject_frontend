import React, {useState,useEffect} from 'react';
import DatePicker from  "react-datepicker"
//the below css is already available in datepicker package
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import DataTable from './DataTable'
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

/* The main functionality of this page is to handle the retrieve data, set up the table headers and call DataTable
   where delete,update buttons are added and delete, update functionality are handled and data is displayed in rows*/
const RetrievePage = () => {
  let [usersCollection, setUsersCollection] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  var [deleteFlag, setDeleteFlag] = useState(false);

  // const testFunction = () =>{
  //   console.log("parentfunciton");
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    retrieveData();
  }//end handleSubmit

  const retrieveData = () =>{
    console.log("inside retrieveData");
    console.log(startDate);
    // get user's selected date
    var date = new Date(startDate);
    //to get the month as "XX" (two digits. Jan should be 01) we do the below logic
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    //to get the day as "XX" (two digits) we do the below logic
    var day = ("0" + date.getDate()).slice(-2);
    //we are joining the year,month,day -- format YYYY-MM-DD
    var params = [date.getFullYear(), mnth, day].join("-");
    console.log(typeof params);//type of params is String
    console.log(params);
    //this axios call is for retrieving all diary entries which we are not using in this app
    //axios.get('http://localhost:8080/api/diary')
    //this is the axios call for selected date
      axios.get(`http://localhost:8080/api/diary/${params}`)
          .then(res => {
            console.log(res);
            setUsersCollection(res.data);
          })
          .catch(function(error){
            setUsersCollection([]);
          })
  }//end of retrieveData
  const dataTable = () => {
    return usersCollection.map((data,i) => {
      return <DataTable obj = {data} key={i} handleRefresh={retrieveData} />;
    });
  }//end of dataTable

 return (
   <Wrapper>
   <Jumbotron>
     <Container className="container">
     <h6>Diaries are also a great way to record life experiences and learn from them. What you think about one thing today is probably different than how you will think about it next week, next month or even next year.</h6>
     <h5>Relax! Review! Update! No worries...Erase!</h5>
   <form onSubmit= {handleSubmit}>
 <div><DatePicker selected={startDate} onChange={date => {setStartDate(date)}} /><input type="submit" value="Submit" /> </div><br />
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <td>ID</td>
          <td>Date</td>
          <td>Entry</td>
          <td>Erase</td>
          <td>Update</td>
        </tr>
      </thead>
        <tbody>
          {dataTable()}
        </tbody>
    </Table>
</form>
</Container>
</Jumbotron>
</Wrapper>

);//end of return
};//end of function
const Wrapper = styled.div `
.jumbotron{
    background: #b1f522;
    text-align:center;
}
h6,h5{
  color:black;
  text-align:center;
  font-family: 'Quantico';
}
input{
  background:rgba(#214118, 0.36);
}
`;
export default RetrievePage;
