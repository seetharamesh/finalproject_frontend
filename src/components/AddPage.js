import React, {useState} from 'react';
import DatePicker from  "react-datepicker"
//the below css is already available in datepicker package
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import styled from 'styled-components';


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
    var mnth = ("0" + (date.getMonth() + 1)).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    //console.log([date.getFullYear(), mnth, day].join("-"));
    var params = [date.getFullYear(), mnth, day].join("-");
    console.log(typeof params);//type of params is String
    console.log(params);
    console.log("--------");
    console.log({entryValue});
    //console.log(date);
    //very important make sure the variables used below (date, entry) should match the POJO class attributes
    const data = {
      date: params,
      entry: entryValue
    };
    console.log("*****");
    console.log(data);
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
   <form onSubmit= {handleSubmit}>
   <br /><h6>Diary is comprised of dated entries, you will express your feelings towards something when it is very fresh in your mind. You can then look back on those entries in the future and see how your feelings may have changed, or maybe how they have stayed the same.</h6>
   <h5>Why wait ? Come on !! start creating your memories!</h5><br />

   <DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br /><br />
     <textarea rows="10" cols="50" wrap="hard" placeholder="start here!"
            value={entryValue}
            onChange={e => setValue(e.target.value)}
          />
    <br/>
    <input type="submit" value="Submit" />
    {submitFlag && <p>{msg}</p>}
</form>
</Wrapper>
);//end of return
};//end of function

const Wrapper = styled.div `
h6{
  color:rgb(91, 2, 84);
  background-color:pink;
}
`;
export default AddPage;
