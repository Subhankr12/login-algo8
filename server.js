const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes/user'));

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})