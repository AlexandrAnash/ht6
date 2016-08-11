'use strict';
import {TaskModel} from './taskModel';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const pg = require('pg');

const listData = [
    new TaskModel(0,1,2),
    new TaskModel(2,1,0)
];
app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../../client-src/app')));
app.use(bodyParser.json());

app.get('/', function(request) {
    console.time('render', request);
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});

app.get('/getTestData', function (request, response) {
    response.json(listData);    
});
app.post('/log', function(request, response) {
    console.error('user error ',request.body);
});