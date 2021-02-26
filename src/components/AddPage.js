import React, {useState} from 'react';
import DatePicker from  "react-datepicker"
//the below css is already available in datepicker package
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

const AddPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [entryValue, setValue] = useState('');

  // const handleChange = (event) =>{
  //   console.log("inside handlechange");
  //   setValue(event.target.value);
  //   console.log(entryValue);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();//remove this "event" because we want to reset the form after submit
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
   <form onSubmit= {handleSubmit}>
   <h2>ADD YOUR DIARY ENTRY</h2><br />
   <DatePicker selected={startDate} onChange={date => setStartDate(date)} /><br />
     <textarea
            value={entryValue}
            onChange={e => setValue(e.target.value)}
          />
    <br/>
    <input type="submit" value="Submit" />
</form>
);//end of return
}//end of function
export default AddPage;
