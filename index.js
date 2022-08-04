//create express server
const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//create get request
app.get('/', (req, res) => {
    res.send('Hello World');
});

//create server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);