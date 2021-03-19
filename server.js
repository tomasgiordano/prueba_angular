const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('prueba-angular'));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res) {
res.sendFile(path.join('prueba-angular/index.html'));
});
console.log('Build successful!!');