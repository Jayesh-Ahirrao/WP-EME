const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getStudentWithId } = require('./mysql');
const PORT = 9000;
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'studentschema'
});

connection.connect((err) => {
    if (!err) {
        console.log('Connected to MySQL');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
});



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/student/:id', (req, res) => {
    const { id } = req.params;

    try {
        connection.query(`SELECT * FROM studentinfo WHERE studId=?`, [id], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Database error' }); // Exit early on error
            }

            if (result.length > 0) {
                const studentData = result[0];
                console.log(studentData);
                res.json({ studentData });
            } else {
                res.json({ studentData: null });
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

