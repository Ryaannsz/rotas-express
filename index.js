import express from 'express'
import router from './routes/routes.js'
import './models/db.js'

const app = express();

app.use(express.json());
app.use(router);

app.listen(8080)