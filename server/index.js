'use strict';
/**
 * @file
 * Сервер приложения. Основан на примере для Heroku
 */
const express = require('express');
const path = require('path');
const app = express();
const pg = require('pg');

app.set('port', process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, '../client-src/app')));

app.get('/', function(request) {
    console.time('render', request);
    console.timeEnd('render');
});

app.listen(app.get('port'), function() {
    console.log('Cool faces on port', app.get('port'));
});

app.get('/getTestData', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        if (err) {
            console.log('err = ', err);
        }
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { 
                console.error(err); 
                response.send('Error ' + err);
            }
            else
            {
                response.join({data: result.rows} );
            }
        });
    });
});