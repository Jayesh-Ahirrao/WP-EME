import Form from 'react-bootstrap/Form';
import { useState } from 'react';



const StudentForm = () => {

    const [studentId, setStudentId] = useState('');
    const [data, setData] = useState(null);

    const handleIdChange = (e) => {
        setStudentId(e.target.value);
    }

    const handleFormSubmit = (e, studentId) => {

    }



    return (

        <div className="container">
            <Form>
                <Form.Group id='studen-id' className="mb-3" controlId="formBasicID">
                    <Form.Label>Student ID</Form.Label>
                    <Form.Control value={studentId} onChange={handleIdChange} onBlur={(e) => handleFormSubmit(e, studentId)} type="number" placeholder="Enter student id" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Full Name" disabled />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Student Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" disabled />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Student Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" disabled />

                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicMobileNumber">
                    <Form.Label>Student Mobile Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter mobile number" maxLength={10} minLength={10} disabled />
                </Form.Group>
            </Form>
            <Form.Text className="text-muted">
                We ll never share your email with anyone else.
            </Form.Text>
        </div>
    )
}

export default StudentForm
