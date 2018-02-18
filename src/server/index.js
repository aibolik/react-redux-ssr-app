import path from 'path';
import express from 'express';
import handleRender from './handleRender';

const port = 3000;

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.get('/*', handleRender);

app.listen(port, () => {
  console.info(`Express listening on port ${port}`);
});
