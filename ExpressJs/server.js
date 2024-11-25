const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 9000;

//make use of bodyparser mw
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/student', (req, res) => {
    const { studentId } = req.body;

    if(!studentId){
        
    }
    res.send('Welcome to the API!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
