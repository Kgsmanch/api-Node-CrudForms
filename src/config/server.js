const express = require('express');
const app = express();
app.use(
    express.urlencoded({
        extended:true
    })
);
app.listen(3333, () => {
    console.log("App listening on port 3333");
});

module.exports =app;
