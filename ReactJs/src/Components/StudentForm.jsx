import { useState } from 'react';
import Form from 'react-bootstrap/Form';
const STUDENTAPIENDPOINT = "http://localhost:9000/student/";
const defaultData = {
    studId: "Enter Student Id",
    fullName: "Enter Student Name",
    Address: "Enter Student Address",
    email: "Enter Student Email",
    mobile: "Enter Student Mobile Number",
}



const StudentForm = () => {

    const [studentId, setStudentId] = useState('');
    const [data, setData] = useState(defaultData);
    const [isInvalid, setIsInvalid] = useState(false);

    const handleIdChange = (e) => {
        setStudentId(e.target.value);
    }

    const handleFormSubmit = async (e, studentId) => {
        try {
            const response = await fetch(STUDENTAPIENDPOINT + studentId);
            const data = await response.json();
            // console.log(data.studentData);
            if (!data.studentData) {
                setIsInvalid(true);
                setData(defaultData);
                return;
            }
            setIsInvalid(false);
            setData(data.studentData);
        } catch (err) {
            console.error('Error:', err);
            setData(defaultData);
            return;
        }

    }

    const infoText = isInvalid ? "invalid" : "valid";


    return (

        <div className="container">
            <Form>
                <Form.Group id='studen-id' className="mb-3" controlId="formBasicID">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control value={studentId} onChange={handleIdChange} onBlur={(e) => handleFormSubmit(e, studentId)} type="number" placeholder="Enter student id" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control value={data.fullName} type="text" placeholder="Full Name" disabled />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Student Address</Form.Label>
                    <Form.Control value={data.Address} type="text" placeholder="Enter Address" disabled />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student Email address</Form.Label>
                    <Form.Control value={data.email} type="email" placeholder="Enter email" disabled />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                    <Form.Label>Student Mobile Number</Form.Label>
                    <Form.Control value={data.mobile} type="number" placeholder="Enter mobile number" maxLength={10} minLength={10} disabled />
                </Form.Group>
            </Form>
            <Form.Text className={infoText} >
                {`Student id is not valid`}
            </Form.Text>
        </div>
    )
}

export default StudentForm
