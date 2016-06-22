import * as express from 'express';
import * as routes from './routes/index';

let app = express();

app.get('/test', routes.index);
app.get('/log', (req, res) => console.log('hey'));

app.listen(3000, () => {
    console.log('express server started');
});
