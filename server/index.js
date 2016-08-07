'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../client-src/app')));

app.get('/', function(request) {
    console.time('render', request);
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});