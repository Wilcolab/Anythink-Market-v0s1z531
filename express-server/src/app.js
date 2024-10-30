//Here are the contents for the file: /express-server/express-server/src/app.js

const express = require('express');
const app = express();

const PORT = 8001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});