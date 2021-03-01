import React, {useState} from 'react';
import DatePicker from  "react-datepicker"
//the below css is already available in datepicker package
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";

/*This AddPage component is used to create diary entries*/

const AddPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [entryValue, setValue] = useState('');
  const [submitFlag, setSubmitFlag] = useState(false);
  const msg = "Your entry created successfully!"

  const handleSubmit = (event) => {
    //event.preventDefault();//remove this "event" because we want to reset the form after submit
    setSubmitFlag(true);
    console.log("inside submit");
    var date = new Date(startDate);
    //to get the month as "XX" (two digits. Jan should be 01) we do the below logic
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    //to get the day as "XX" (two digits) we do the below logic
    var day = ("0" + date.getDate()).slice(-2);
    //we are joining the year,month,day -- format YYYY-MM-DD
    var params = [date.getFullYear(), mnth, day].join("-");
    console.log(typeof params);//type of params is String
    console.log({entryValue});
    //very important make sure the variables used below (date, entry) should match the POJO class attributes
    const data = {
      date: params,
      entry: entryValue
    };
    //axios request to create a row
    axios.post('http://localhost:8080/api/diary', data)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
 return (
   <Wrapper>
     <Jumbotron>
     <h6>Diary is comprised of dated entries, you will express your feelings towards something when it is very fresh in your mind. You can then look back on those entries in the future and see how your feelings may have changed, or maybe how they have stayed the same.</h6>
     <h5>Why wait ? Come on !! Start creating your memories!</h5>
   <form onSubmit= {handleSubmit}>
   <DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br /><br />
     <textarea rows="7.5" cols="50" wrap="hard" placeholder="start here!"
            value={entryValue}
            onChange={e => setValue(e.target.value)}
          />
    <br/>
    <input type="submit" value="Submit" />
    {submitFlag && <p>{msg}</p>}
</form>
</Jumbotron>
</Wrapper>
);//end of return
};//end of function

const Wrapper = styled.div `
.jumbotron{
    background: #b1f522;
    text-align:center;
}
textarea{
  background:#2a3036 ;
  color: white;
  font-family: 'Yusei Magic', sans-serif;
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
export default AddPage;
