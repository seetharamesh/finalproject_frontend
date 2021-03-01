import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

/*This component is to show the modal and handle update functionality*/
export default function ShowModal(props) {
  const [show, setShow] = useState(false);
  const [diaryEntryData, setDiaryEntryData] = useState({});
  const handleClose = () => setShow(false);

  //this is similar to handleChange
  const setEntryData = (event) => {
    setDiaryEntryData({ entry: event.target.value });
    console.log(event.target.value);
  };

  //When data is updated and pressed Save the modal closes with that action.
  const handleSaveAndClose = () => {
    const data = {id:props.id ,entry:diaryEntryData.entry , date:props.date}
    //axios call to update the data and do the automatic update in the viewing screen using handleRefresh()
    axios.put(`http://localhost:8080/api/diary/${props.id}`,data)
        .then(res => {
          console.log(res);
          setDiaryEntryData(res.data);
          setShow(false);
          props.handleRefresh();
        })
        .catch(function(error){
          console.log(error);
        })
    setShow(false);

  };
  const handleShow = () => setShow(true);
//when update is clicked the the popup is populated with entry and date and id is set too because
//we need to update the database and screen
  useEffect(() => {
    if (show) {
      console.log("id is", props.id);
      setDiaryEntryData({id: props.id, entry: props.entry,date:props.date});
    }
  }, [show]);

  return (
    <>
    <button type="button" class="btn btn-primary" aria-label="Left Align" onClick= {handleShow}>
     <span class="fa fa-pencil-square-o" aria-hidden="true"></span>
     </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Edit details for {diaryEntryData.date}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            class="form-control"
            id={diaryEntryData.id}
            rows="3"
            defaultValue={diaryEntryData.entry}
            onChange={setEntryData}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveAndClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
